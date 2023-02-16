
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'

import requests from '../utils/requests'
import { Movie } from '../types'
import Row from '../components/Row'

// Interface props for the movie types 
interface Props {
  NetflixOriginals: Movie[],
  TrendingNow: Movie[],
  TopRated: Movie[],
  ActionMovies: Movie[],
  ComedyMovies: Movie[],
  HorrorMovies: Movie[],
  RomanceMovies: Movie[],
  Documentaries: Movie[],
}

const Home = ({ NetflixOriginals, TrendingNow, TopRated, ActionMovies, ComedyMovies, HorrorMovies, RomanceMovies, Documentaries }: Props) => {
  // console.log(TopRated)
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[120vh]">
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      <main className='relative pl-4 space-x-2 '>
        <Banner NetflixOriginals={NetflixOriginals} />
        <section>
          <Row title="Trending Now" movies={TrendingNow} />
          <Row title="Top Rated" movies={TopRated} />

          {/* My list */}
          <Row title="Action Thrillers" movies={ActionMovies} />
          <Row title="Horror movies" movies={HorrorMovies} />
          <Row title="Comedy movies" movies={ComedyMovies} />
          <Row title="Romance movies" movies={RomanceMovies} />
          <Row title="Documentaries" movies={Documentaries} />
        </section>

        {/* Model */}
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const [
    NetflixOriginals,
    TrendingNow,
    TopRated,
    ActionMovies,
    ComedyMovies,
    HorrorMovies,
    RomanceMovies,
    Documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ])
  return {
    props: {
      NetflixOriginals: NetflixOriginals.results,
      TrendingNow: TrendingNow.results,
      TopRated: TopRated.results,
      ActionMovies: ActionMovies.results,
      ComedyMovies: ComedyMovies.results,
      HorrorMovies: HorrorMovies.results,
      RomanceMovies: RomanceMovies.results,
      Documentaries: Documentaries.results,
    }
  }
}
