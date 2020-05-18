import { Component, OnInit } from '@angular/core';
import { TvshowService } from '../tvshow.service';
import { IShow} from '../ishow';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  showList: IShow[];

  constructor(private showService: TvshowService) { }

  ngOnInit(): void {
    this.getAllShows();
  }

  getAllShows() {
    this.showService.getAllShows().subscribe(data => this.showList = data);
  }
}
