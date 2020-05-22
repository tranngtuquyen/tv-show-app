import { Component, OnInit, Input } from '@angular/core';
import { IShow } from '../ishow';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {
  slideConfig;
  public innerWidth: any;
  
  @Input() showList: IShow[];

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.slideConfig = {
      "slidesToShow": this.innerWidth/230, "slidesToScroll": 4,
      initialSlide: 0,
      arrow: true,
      'infinite': false,
      'respondTo': 'window',
      rows: 1,
      responsive: [
        {
        breakpoint: 1024,
        settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        }
        },
        {
        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 2
        }
        },
        {
        breakpoint: 360,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
        }
      ]
    };
  }
}
