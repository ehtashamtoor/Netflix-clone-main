import { Movie } from "../types"
import { HiChevronLeft } from 'react-icons/hi'
import { HiChevronRight } from 'react-icons/hi'
import Thumbnail from "./Thumbnail"

import { useRef, useState } from "react"

interface Props {
    title: string,
    movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
    let RowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setisMoved] = useState(false);

    const handleScroll = (direction: string) => {
        setisMoved(true);


        if (RowRef.current) {
            let { scrollLeft, clientWidth } = RowRef.current;

            const scrollValue = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;

            RowRef.current.scrollTo({ left: scrollValue, behavior: "smooth" })
            console.log(RowRef.current.scrollLeft);
        }
    }
    return (
        <div className="h-40 space-x-4 mt-10">
            <h1 className="text-sm md:text-lg textShadow cursor-pointer transition duration-200 text-[#e4e3e3] hover:text-white mb-5 ">{title}</h1>

            <div className="group relative">
                <HiChevronLeft className="absolute top-[30px] md:top-[40px] left-3 z-40 m-auto h-[2.4rem] w-[2.5rem] transition opacity-0 hover:scale-125 group-hover:opacity-100 cursor-pointer" onClick={() => {
                    handleScroll("left")
                }} />

                <div ref={RowRef} className="flex items-start space-x-1 md:space-x-[1px] md:pl-1 overflow-x-scroll mb-4">
                    {
                        movies.map((movie) => {
                            return <Thumbnail key={movie.id} movie={movie} />
                        })
                    }
                </div>

                <HiChevronRight className="absolute top-[30px] md:top-[40px] right-3 z-40 m-auto h-[2.5rem] w-[2.5rem] transition opacity-0 hover:scale-125 group-hover:opacity-100 cursor-pointer" onClick={() => {
                    handleScroll("right")
                }} />
            </div>
        </div>
    )
}

export default Row