import { Component, OnInit, Input } from '@angular/core';
import { IShow } from '../ishow';

@Component({
  selector: 'app-tv-show-list',
  templateUrl: './tv-show-list.component.html',
  styleUrls: ['./tv-show-list.component.css']
})
export class TvShowListComponent implements OnInit {

  @Input() showList: IShow[];
  constructor() { }

  ngOnInit(): void {
  }

}
