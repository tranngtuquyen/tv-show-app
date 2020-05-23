import { Component, OnInit } from '@angular/core';
import { IShow, IEpisode } from '../ishow';
import { TvshowService } from '../tvshow.service';
import { ActivatedRoute,Router } from "@angular/router";

//Routing added
@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  show: IShow;
  episodeList: IEpisode[];
  id: number;
  selectedSeasonID:number;
  
constructor (private route: ActivatedRoute,                                private tvshowservice:TvshowService,
 private router: Router) {
    this.route.params.subscribe(params => this.id =params.id);

}
  


  // route is the variable used from our component routing which will get the id from the url path.
  ngOnInit(): void {
    this.tvshowservice.getTvShow(this.id).subscribe((data) => (this.show = data));
        //this.getEpisodeList(this.id)
  }
// instead of hardcoding id ,now we got id from the route url
//Event handler function to handle the option change in dropdown.The [value] property stores the value(here the season id)of the option the user selected.
selectChangeHandler(event: any){
      this.selectedSeasonID = event.target.value;
      this.router.navigate(['/seasons',this.selectedSeasonID],);
      //this.getEpisodeList(this.selectedSeasonID)
    }
    /*getEpisodeList(id) {
      this.tvshowservice.getIEpisodeList(this.selectedSeasonID).subscribe(data => this.episodeList = data);     
    }*/
/*onNavigate(v:string){

  this.router.navigate(['/seasons',this.selectedSeasonID]);

 }*/
   
  }
