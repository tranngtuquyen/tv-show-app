import { Component, OnInit } from '@angular/core';
import { IShow } from '../ishow';
import { ActivatedRoute} from '@angular/router';
import { TvshowService } from '../tvshow.service';


@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
  show: IShow;
  searchWord: string;
  errorMsg: string = "";


  constructor (private route: ActivatedRoute, private tvshowservice:TvshowService)
   {
    this.route.params.subscribe(params => {this.searchWord =params.searchWord;

    this.tvshowservice.onSearch(this.searchWord).
    //error handling
    subscribe(data => {
      this.show= data;
      this.errorMsg="";
    }, error=> {
      this.show = null;
      this.errorMsg ="No search found";
    });

});
}


  ngOnInit(): void {

  }

}
