export interface IShow {
    id: number;
    name: string;
    description: string;
    image: string;
    rating: number;
    language: string;
    genres: string[];
    seasons: ISeason[];
    cast: string[];
    year: Date;
    network: string;
    time: string;
    days: string[];
}

export interface ISeason {
    id: number;
    name: string;
}
