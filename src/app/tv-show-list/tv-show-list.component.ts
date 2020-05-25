import { Component, OnInit, Input, HostListener } from '@angular/core';
import { IShow } from '../ishow';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {
  slideConfig;
  @Input() showList: IShow[];


  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let slides = Math.floor(window.innerWidth / 215);
    this.slideConfig = {
      "slidesToShow": slides, "slidesToScroll": slides,
      'infinite': false, 'arrows': true, "initialSlide": 0,'respondTo': 'window',
    };
  }

  ngOnInit(): void {
    this.onResize(event);
  }
}
