import { Component, OnInit } from '@angular/core';
import { IEpisode } from '../ishow';
import { TvshowService } from '../tvshow.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  episodeList: IEpisode[];
  id: number;

  constructor(private route: ActivatedRoute,
    private tvshowservice:TvshowService) {
      this.route.params.subscribe(params => this.id =params.id);
     }

  ngOnInit(): void {
    this.tvshowservice.getIEpisodeList(this.id).subscribe((data) => (this.episodeList = data));

  }




  }

       

         
        


