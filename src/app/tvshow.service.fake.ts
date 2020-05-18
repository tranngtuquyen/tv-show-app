import { Ishowservice } from './ishowservice';
import { IShow, IEpisode } from './ishow';
import { Observable, of } from 'rxjs';

export class TvshowServiceFake implements Ishowservice{
  private fakeService: IShow = {
    id: 4,
    name:'Girls',
    description: 'Its about girls show',
    image: '',
    rating: 5,
    language: 'English',
    genres: ['Comedy'],
    seasons: [2],
    cast: ['John Doe'],
    year: '2000',
    network:'abc',
    time: '08.00 pm',
    days: ['mondays']
  }

   public getTvShow(id : number):
     Observable<IShow>{
        return of(this.fakeService);
       }





}



