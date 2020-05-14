import { Component, OnInit } from '@angular/core';
import { IShow } from '../ishow';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {
  show: IShow;
  
  constructor(private tvshowservice:TvshowService) { }

  ngOnInit(): void {
    this.tvshowservice.getTvShow(2).subscribe((data) => (this.show = data));

  }

}
