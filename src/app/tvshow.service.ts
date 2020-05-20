import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IShow, IEpisode } from './ishow';
import { map } from 'rxjs/operators';
import { Ishowservice } from './ishowservice';


interface IShowData {
  id: number,
  name: string,
  summary: string,
  image: {
    medium: string
  },
  rating: {
    average: number
  },
 premiered: string,
 language: string,
 genres: string[],
 network: {
   name: string
 },
 schedule: {
   time: string,
   days: string[]
 },
 _embedded:{
  //seasons: Array<{ number: number}> Changing to id, as we require season id to get list of episodes
  seasons: Array<{ id : number}>
  cast: Array<{ person: { name: string }}>
 }
 }



 interface IEpisodeData {
  id: number;
  name: string;
  number: number | null;
  image: {
    medium: string,
    original: string
  };
  summary: string;
  season: number
 }

@Injectable({
  providedIn: 'root'
})
export class TvshowService implements Ishowservice{

  constructor(private httpclient: HttpClient) { }

  getTvShow(id : number) {
    return this.httpclient.get<IShowData>(
      `${environment.baseUrl}api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast`).pipe(map(data=> this.
        transformToIShows(data))
      )
    }
  transformToIShows(data: IShowData) : IShow {
   return {
    id: data.id,
    name: data.name,
    description: data.summary,
    image: data.image.medium,
    rating: data.rating ? data.rating.average : null,
    language: data.language,
    genres: data.genres,
    network: data.network? data.network.name : null,
    time: data.schedule.time,
    days: data.schedule.days,
    year: data.premiered,
    seasons: data._embedded? this.transformToSeasons(data._embedded.seasons) : null,
    cast: data._embedded? this.transformToCast(data._embedded.cast) : null
   }
  }

  transformToCast(data: Array<{person: {name: string}}>): string[] {
    return  data.map(value=> value.person.name);
  }
// transformToSeasons(data: Array<{number: number}>): number[] {
//     return data.map(value=> value.number)
// }

//Changing to id, as we require season id to get list of episodes
    transformToSeasons(data: Array<{id: number}>): number[] {
  return data.map(value=> value.id);
    }

  getIEpisodeList(seasonId: number) {
    const url = `http://api.tvmaze.com/seasons/${seasonId}/episodes`;
    return this.httpclient.get<IEpisodeData[]>(url)
    .pipe(map(data => this.transfromToIEpisodeList(data)))
  }
  
  transformToIEpisode(data: IEpisodeData) : IEpisode {
    return ({
      id: data.id,
      name: data.name,
      season: data.season,
      episode: data.number,
      image: data.image? data.image.medium: '',
      description: data.summary
    });
  }
  transfromToIEpisodeList(data: IEpisodeData[]): IEpisode[] {
    return data.map(d => this.transformToIEpisode(d));
  }

  getAllShows() {
    const url = `http://api.tvmaze.com/shows`;
    return this.httpclient.get<IShowData[]>(url)
    .pipe(map(data => data.map(d => this.transformToIShows(d))))
  }

  getShowByGenre(showList: IShow[],genre: string) {
    return showList.filter(show => show.genres.indexOf(genre) !== -1);
  }

  getShowByRating(showList: IShow[], minRating: number) {
    return showList.filter(show => show.rating > minRating);
  }
}










