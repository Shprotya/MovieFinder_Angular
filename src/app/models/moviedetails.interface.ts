export interface SearchResults {
    Search: MovieResults[];
    totalResults?: string;
    Response: string;
    Error?: string;
}

export interface MovieResults {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
    Rated?: string;
    Runtime?: string;
    Genre?: string;
    Plot?: string;
    Director?: string;
    Actors?: string;
    Language?: string;
    Country?: string;
    imdbRating?: string;
    BoxOffice?: string;
}