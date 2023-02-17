
export interface Genre {
    id: number,
    name: string
}

export interface Element {
    type:
    | "Bloopers" | "Featurette" | "Behind the Scenes" | "Clip" | "Trailer" | "Teaser"
}

export interface Movie {
    id: number
    name: string
    adult: boolean
    original_name: string
    title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genre_ids: number[]
    origin_country: string[]
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}