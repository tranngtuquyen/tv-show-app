import { Component, OnInit } from '@angular/core';
import { IShow } from '../ishow';
import { ActivatedRoute, Router } from '@angular/router';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
  show;
  searchWord: string;
  constructor (private route: ActivatedRoute, private tvshowservice:TvshowService
   ) {
    this.route.params.subscribe(params => this.searchWord =params.searchWord);
   }

  ngOnInit(): void {
    this.tvshowservice.onSearch(this.searchWord).subscribe(data => this.show=data);
    console.log(this.show);
    console.log(this.searchWord);
  }

}
