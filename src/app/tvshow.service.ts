import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { IShow } from './ishow';
import { map } from 'rxjs/operators';


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
  seasons: Array<{id: number}>,

  cast: Array<{ person: { name: string }}>
 }
 }

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

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
    rating: data.rating.average,
    language: data.language,
    genres: data.genres,
    network: data.network.name,
    time: data.schedule.time,
    days: data.schedule.days,
    year: data.premiered,
    seasons: this.transformToSeasons(data._embedded.seasons),
    cast: this.transformToCast(data._embedded.cast)
   }
  }

  transformToCast(data: Array<{person: {name: string}}>): string[] {
    return  data.map(value=> value.person.name);
  }
  transformToSeasons(data: Array<{id: number}>): number[] {
  return data.map(value=> value.id);
    }
  }











