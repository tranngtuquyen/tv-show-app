import { Component, OnInit } from '@angular/core';
import { IShow, IEpisode } from '../ishow';
import { TvshowService } from '../tvshow.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
  
})
export class ShowDetailsComponent implements OnInit {

  show: IShow;
  episodeList: IEpisode[];
  id: number;

  constructor(private route: ActivatedRoute, private tvshowservice:TvshowService) {
    this.route.params.subscribe(params => this.id =params.id);
   }

  ngOnInit(): void {
    this.tvshowservice.getTvShow(this.id).subscribe((data) => (this.show = data));
    this.getEpisodeList(this.id)
  }

  getEpisodeList(id:number) {
    this.tvshowservice.getIEpisodeList(this.id).subscribe(data => this.episodeList = data);
  }

}
