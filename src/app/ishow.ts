export interface IShow {
    id: number;
    name: string;
    description: string;
    image: string;
    rating: number;
    language: string;
    genres: string[];
    seasons: number[];
    cast: string[];
    // year: Date;
    year: string
    network: string;
    time: string;
    days: string[];
  
}

export interface IEpisode {
    id: number;
    name: string;
    season: number;
    episode: number;
    image: string;
    description: string;
}
