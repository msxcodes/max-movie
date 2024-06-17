export interface ITrendingMovies {
    adult: boolean;
    id: number;
    backdrop_path: string;
    genre_ids: number[]
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string
    video: boolean;
    vote_count: number;
    vote_average: number;
    name: string;
}

export interface IGenres {
    id: number;
    name: string;
} 