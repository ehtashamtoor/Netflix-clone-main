import Image from "next/image"
import { Movie } from "../../types"

interface Props {
    movie: Movie
}

const Thumbnail = ({ movie }: Props) => {
    // console.log(movie)
    return (
        <>
            {
                movie.backdrop_path ? <div className="h-26 min-w-[170px] cursor-pointer transition duration-200 ease-out md:h-34 md:min-w-[210px] md:hover:scale-105 hover:rounded">
                    <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} height={200} width={200} className="rounded-sm object-cover rounded-md" alt="movie thumnbail" />
                </div> : ""
            }
        </>

    )
}

export default Thumbnail