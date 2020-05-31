import { Component } from '@angular/core';
import { IShow } from './ishow';
import { TvshowService } from './tvshow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';
  genres: string[] = [
    'Action','Anime','Comedy','Crime','Drama','Family','Fantasy','Horror','Mystery','Romance','Supernatural','Thriller'
  ];

  tvshow: IShow;
  constructor(private tvshowService: TvshowService){}

  doSearch(searchValue){
    const userInput = searchValue;
    
    this.tvshowService.onSearch(
            userInput[0])
            .subscribe(data => this.tvshow = data);

  }

}
