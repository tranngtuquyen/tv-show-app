import { Observable } from 'rxjs';
import { IShow, IEpisode } from './ishow';

export interface Ishowservice {
  getTvShow(id : number):
  Observable<IShow>

  getAllShows():
  Observable<IShow[]>

  getIEpisodeList(seasonId: number) :
  Observable<IEpisode[]>



}
