import { DocumentData } from "firebase/firestore"
import { atom } from "recoil"
import { Movie } from "../types"


export const ModalState = atom({
    key: "ModalState",
    default: false
})


export const MovieState = atom<Movie | null>({
    key: "MovieState",
    default: null
})

export const MyMovies = atom<Movie[] | null>({
    key: "MyMovies",
    default: null
})
