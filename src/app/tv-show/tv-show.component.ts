import { Component, OnInit } from '@angular/core';
import { IShow, IEpisode } from '../ishow';
import { TvshowService } from '../tvshow.service';
import { ActivatedRoute } from "@angular/router";
//Routing added

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  show: IShow;
  episodeList: IEpisode[];
  id: number;

  constructor(private route: ActivatedRoute,private tvshowservice:TvshowService) {
    this.route.params.subscribe(params => this.id =params.id);
  }
  // route is the variable used from our component routing which will get the id from the url path.

  ngOnInit(): void {
    this.tvshowservice.getTvShow(this.id).subscribe((data) => (this.show = data));
    this.getEpisodeList(this.id)
  }
// instead of hardcoding id ,now we got id from the route url

  getEpisodeList(id:number) {
    this.tvshowservice.getIEpisodeList(this.id).subscribe(data => this.episodeList = data);
  }

}
