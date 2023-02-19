import Image from "next/image";
import { useState, useEffect } from "react";
import { Movie } from "../types";
import { base_url } from "../constants/movies";

import { ModalState, MovieState } from "../Atoms/ModalAtom";
import { useRecoilState } from "recoil";

// icons
import { FaPlay } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";

interface Props {
  NetflixOriginals: Movie[];
}

const Banner = ({ NetflixOriginals }: Props) => {
  const [showModal, setshowModal] = useRecoilState(ModalState);
  const [currentMovie, setcurrentMovie] = useRecoilState(MovieState);

  const [Movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    setMovie(
      NetflixOriginals[Math.ceil(Math.random() * NetflixOriginals.length) ]
    );
  }, [NetflixOriginals]);
  // console.log(Movie)

  return (
    <div className="flex flex-col space-x-2 h-[75vh] justify-end md:h-[85vh] md:justify-end p-4">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`${base_url}${Movie?.backdrop_path || Movie?.poster_path}`}
          fill={true}
          alt="movie Poster"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="relative">
        <h1 className="text-3xl lg:text-6xl md:text-5xl mb-4 textShadow">
          {Movie?.title || Movie?.name || Movie?.original_name}
        </h1>

        <p className="lg:text-1xl max-w-xs lg:max-w-lg md:max-w-md textShadow">
          {Movie?.overview}
        </p>
      </div>

      <div className="flex space-x-2 mt-5">
        <button className="bannerBtn text-black bg-white">
          {" "}
          <FaPlay className="text-black" /> Play
        </button>

        <button
          data-modal-target="defaultModal"
          data-modal-toggle="defaultModal"
          className="bannerBtn bg-[gray]/70"
          onClick={() => {
            setcurrentMovie(Movie);
            setshowModal(true);
          }}
        >
          <HiOutlineInformationCircle className="h-5 w-5" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default Banner;
