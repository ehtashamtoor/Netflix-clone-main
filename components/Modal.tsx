import { ModalState, MovieState, MyMovies } from "../Atoms/ModalAtom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { useState, useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Element, Genre, Movie } from "../types";
import ReactPlayer from "react-player";

// icons
import { HiX } from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { HiPause } from "react-icons/hi2";
import { HiVolumeUp } from "react-icons/hi";
import { HiVolumeOff } from "react-icons/hi";
import { FiThumbsUp } from "react-icons/fi";

const Modal = () => {
  const [showModal, setshowModal] = useRecoilState(ModalState);
  const [movie, setMovie] = useRecoilState(MovieState);
  let [MyList, setMyList] = useRecoilState(MyMovies);
  // let setMyMovies = useSetRecoilState(MyMovies);

  const [Trailer, setTrailer] = useState("");
  const [Genres, setGenres] = useState<Genre[]>();
  const [muted, setmuted] = useState(false);
  const [playing, setplaying] = useState(true);
  const [popularity, setpopularity] = useState(0);

  const handleClose = () => {
    setshowModal(false);
  };

  const AddMovieToList = () => {
    if (movie && !MyList?.includes(movie)) {
      movie && setMyList((addedMovies) => addedMovies ? [...addedMovies, movie] : [movie])
    } else {
      console.log("movie ha pehle e")
    }

    console.log(MyList)
  }

  useEffect(() => {
    if (!movie) return;

    setpopularity(movie.vote_average * 10);

    const fetchVideos = async () => {
      let data = await fetch(
        `https://api.themoviedb.org/3/${movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((res) => res.json());
      // console.log(data);

      if (data?.videos) {
        let index = data.videos.results.findIndex((videotype: Element) => {
          return videotype.type === "Trailer";
        });
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    };

    fetchVideos();
  }, [movie]);

  return (
    <Transition appear show={showModal} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-screen h-full md:h-4/4 md:w-3/4 overflow-hidden bg-black/30 p-2 text-left align-middle shadow-xl transition relative top-14 ">
                <button
                  className="border-none absolute right-4 top-4 hover:bg-black/90 modelBtn z-[20]"
                  onClick={handleClose}
                >
                  <HiX className="h-5 w-5" />
                </button>

                <div className="relative pt-[56.25%]">
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${Trailer}` || "No video found"}
                    width="100%"
                    height="100%"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      pointerEvents: "none",
                    }}
                    playing={playing}
                    muted={muted}
                  />

                  <div className="text-2xl md:text-5xl absolute z-[30] left-5 textShadow bottom-[55px] md:bottom-20">
                    {movie
                      ? movie.title || movie.name || movie.original_name
                      : ""}
                  </div>

                  <div className="flex z-[25] justify-between relative">
                    <div className="flex items-center space-x-2 relative bottom-2 left-2">
                      <button
                        className="flex items-center justify-center space-x-2 rounded-md bg-white md:p-3 p-2 h-auto w-[6rem] md:w-[8rem] text-black md:text-lg"
                        onClick={() => {
                          setplaying(!playing);
                        }}
                      >
                        {!playing ? (
                          <>
                            <FaPlay />
                            <span className="text-lg">Play</span>
                          </>
                        ) : (
                          <>
                            <HiPause />
                            <span className="text-lg">Pause</span>
                          </>
                        )}
                      </button>

                      <button className="text-lg p-2 modelBtn" onClick={() => { AddMovieToList() }}>
                        <HiPlus className="text-white" />
                      </button>
                      <button className="text-lg p-2 modelBtn">
                        <FiThumbsUp className="text-white" />
                      </button>
                    </div>
                    <div
                      className="absolute right-6 modelBtn"
                      onClick={() => {
                        setmuted(!muted);
                      }}
                    >
                      {muted ? <HiVolumeOff /> : <HiVolumeUp />}
                    </div>
                  </div>
                </div>
                <div className="bg-[#292929] pl-8 pt-4 relative z-[30]">
                  <div className="flex space-x-2">
                    <span className="text-green-500 font-semibold">
                      {Math.ceil(popularity)} % match
                    </span>
                    <span>{movie?.release_date}</span>
                    <span className="flex items-center px-1 justify-center border-2 text-[10px]">
                      HD
                    </span>
                  </div>

                  <div className="mt-2 mb-2">{movie?.overview}</div>

                  <div className="">
                    <div className="text-gray-500 inline-block">
                      Genres:{" "}
                      <p className="text-white inline-block">
                        {Genres?.map((genre, index) => {
                          return (
                            <span key={index}>
                              {genre.name}
                              {index === Genres.length - 1 ? "" : ","}&nbsp;
                            </span>
                          );
                        })}
                      </p>
                    </div>
                    <div className="text-gray-500">
                      Original Language:{" "}
                      <span className="text-white">
                        {movie?.original_language}
                      </span>
                    </div>
                    <div className="text-gray-500">
                      Total Votes: <span>{movie?.vote_count}</span>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
