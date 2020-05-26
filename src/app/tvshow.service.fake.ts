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

  private fakeShowList: IShow[] = [
    {
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
    },
    {
      id: 5,
      name:'Heros',
      description: 'Its about heros show',
      image: '',
      rating: 9,
      language: 'English',
      genres: ['Action'],
      seasons: [100],
      cast: ['Alan Doe'],
      year: '2020',
      network:'abc',
      time: '08.00 pm',
      days: ['mondays']
    },
  ];

  private fakeEpisodeList: IEpisode[] = [
    {id: 2,
      name: "This is Episode 1",
      season: 1,
      episode: 1,
      image: '',
      description: 'Episode 1 of Season 1'
    },
    {id: 3,
      name: "This is Episode 2",
      season: 1,
      episode: 2,
      image: '',
      description: 'Episode 2 of Season 1'
    }
  ];

  //  public getTvShowSearch(search : number|string):
  //    Observable<IShow>{
  //       return of(this.fakeService);
  //   }
    public getTvShow(id : number):
     Observable<IShow>{
        return of(this.fakeService);
    }

  public getAllShows():  Observable<IShow[]> {
    return of(this.fakeShowList);
  }

  public getIEpisodeList(seasonId: number) : Observable<IEpisode[]> {
    return of(this.fakeEpisodeList);
  }

  public getShowByGenre(showList: IShow[],genre: string) :  Observable<IShow[]>{
    return of(this.fakeShowList);
  }
  public getShowByRating(showList: IShow[], minRating: number):
    Observable<IShow[]>{
      return of(this.fakeShowList);
  }

  public onSearch(searchWord: string) : Observable<IShow>{
    return of(this.fakeService);
  }

 }




