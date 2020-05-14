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
 network: string,
 schedule: {
   time: string,
   days: string[]
 },
 _embedded:{
   seasons:[ {
   id: number
    }],
 
  cast: [{ person: { name: string }}]
 }
 }

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private http: HttpClient) { }
  getTvShow(id : number) {
    return this.http.get<IShowData>(
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
    // genres: [ 
    //   data.genres[0], 
    //   data.genres[1], 
    //   data.genres[3]
    // ],  //Some TV show doesn't have 3 values for genres
    genres: this.getGenres(data.genres),
    network: data.network,
    time: data.schedule.time,
    days: data.schedule.days,
    year: data.premiered,
    seasons: data._embedded.seasons[0].id,
    cast: this.transformToCast(data._embedded.cast)  //[data._embedded.cast[0].person.name, data._embedded.cast[1].person.name]
   }
  }
  
  transformToCast(data: Array<{person: {name: string}}>): string[] {
    return  data.map(d=> d.person.name);
  }
   
  
  //Returns all the items in the genres[]
  getGenres(genres)  {
    return genres ? genres.join(', ') : ''
  }

}


//  getGenresWhile(genres) {
//   let str = '';
//    for(let j=0; j < genres.length-1; j++) {
//      str = genres[j] +',';
//    }
//    str = str.substring(0,str.length - 1);
        
//    }
  








