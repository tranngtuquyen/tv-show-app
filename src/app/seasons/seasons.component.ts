import { Component, OnInit } from '@angular/core';
import { IEpisode, IShow } from '../ishow';
import { TvshowService } from '../tvshow.service';
import { ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common'; //go back location injector



@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {


  episodeList: IEpisode[];
  id: number;
  constructor(private route: ActivatedRoute,
    private tvshowservice:TvshowService, private location: Location) {
      this.route.params.subscribe(params => this.id =params.id)
     }
    //go back to previous page 
    goback(){
    this.location.back();
     }

  ngOnInit(): void {
    this.tvshowservice.getIEpisodeList(this.id).subscribe((data) => (this.episodeList = data));
    console.log(this.episodeList);
      }
    }

       

         
        


