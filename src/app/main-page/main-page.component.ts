import { Component, OnInit } from '@angular/core';
import { TvshowService } from '../tvshow.service';
import { IShow} from '../ishow';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  showList: IShow[] = [];
  actionList: IShow[] = [];
  crimeList: IShow[] = [];
  trendingList: IShow[] = [];
  thrillerList: IShow[] = [];

  constructor(private showService: TvshowService) { }

  ngOnInit(): void {
    this.getAllShows();
  }

  getAllShows() {
    this.showService.getAllShows().subscribe(data => {
      this.actionList = this.showService.getShowByGenre(data, "Action");
      this.crimeList = this.showService.getShowByGenre(data, "Crime");
      this.trendingList = this.showService.getShowByRating(data, 8);
      this.thrillerList = this.showService.getShowByGenre(data, "Thriller");
    });
  }
}
