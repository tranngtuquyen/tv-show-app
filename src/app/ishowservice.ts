import { Observable } from 'rxjs';
import { IShow, IEpisode } from './ishow';

export interface Ishowservice {
  // getTvShowSearch(search : number|string):
  // Observable<IShow>

  getTvShow(id : number):
  Observable<IShow>

  getAllShows():
  Observable<IShow[]>

  getIEpisodeList(seasonId: number) :
  Observable<IEpisode[]>

  onSearch(searchWord: string) :
  Observable<IShow>

}
