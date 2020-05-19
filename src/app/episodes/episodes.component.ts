import { Component, OnInit } from '@angular/core';
import { TvshowService } from '../tvshow.service';
import { ActivatedRoute } from "@angular/router";
import { IShow, IEpisode } from '../ishow';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  show: IShow;
  episodeList: IEpisode[];
  id: number;
  constructor(private route: ActivatedRoute, private tvshowservice:TvshowService) { 
    this.route.params.subscribe(params => this.id =params.id);
  }

  ngOnInit(): void {

    this.tvshowservice.getIEpisodeList(this.id).subscribe(data => this.episodeList = data);
  }

}

