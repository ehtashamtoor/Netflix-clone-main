import Image from "next/image"
import { useState } from "react"
import { Movie } from "../types"


// icons
import { FaPlay } from "react-icons/fa"
import { HiPlus } from "react-icons/hi"
import { FiThumbsUp } from "react-icons/fi"
import { FiThumbsDown } from "react-icons/fi"
import { HiChevronDown } from "react-icons/hi"

interface Props {
    movie: Movie
}

const Thumbnail = ({ movie }: Props) => {

    const [isHovered, setisHovered] = useState(false);
    console.log(movie)
    return (
        <>
            {
                movie.backdrop_path ? <div className="h-26 min-w-[170px] cursor-pointer transition duration-200 ease-out md:h-34 md:min-w-[210px] hover:customScale hover:rounded-none hover:bg-[#303030] flex flex-col" onMouseEnter={() => { setisHovered(true) }} onMouseLeave={() => { setisHovered(false) }}>
                    <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} height={205} width={205} className="rounded-sm rounded-md self-center" alt="movie thumnbail" />

                    {
                        isHovered ? <div className="mt-2 pb-5 px-2">
                            <div className="flex justify-between items-center">
                                <div className="space-x-1 flex">
                                    <div className="w-6 h-6 bg-white flex items-center justify-center rounded-[50%]"><FaPlay className=" text-sm text-black ml-1" /></div>
                                    <div className="w-6 h-6 border-[1.4px] text-center bg-[#303030] flex items-center justify-center rounded-[50%]"><HiPlus className=" text-1xl" /></div>
                                    <div className="w-6 h-6 border-[1.4px] p-1 text-center bg-[#303030] flex items-center justify-center rounded-[50%]"><FiThumbsUp className=" text-sm" /></div>
                                    <div className="w-6 h-6 border-[1.4px] p-1 text-center bg-[#303030] flex items-center justify-center rounded-[50%]"><FiThumbsDown className="text-sm" /></div>
                                </div>
                                <div className="w-6 h-6 border-[1.4px] p-1 text-center bg-[#303030] flex items-center justify-center rounded-[50%]">
                                    <HiChevronDown className="" />
                                </div>
                            </div>
                            <div className="mt-[1px]">
                                <h1 className="text-[10px] pt-1 px-2">{movie.title || movie.name || movie.original_name}</h1>
                            </div>
                            {
                                movie.adult ? <div className="w-4 h-4 mt-1 ml-1 border-[1px] text-[8px] flex items-center justify-center px-2">
                                    <span>18+</span>
                                </div>
                                    :
                                    <div className="w-4 h-4 m-0 mt-1 ml-1 border-[1px] text-[8px] flex items-center justify-center px-2">
                                        <span>16+</span>
                                    </div>
                            }

                        </div>

                            : ""
                    }
                </div> : ""
            }
        </>
    )
}

export default Thumbnail