import { Component, OnInit } from '@angular/core';
import { TvshowService } from '../tvshow.service';
import { IShow } from '../ishow';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  showsByGenre: IShow[] = [];
  genre: string;

  constructor(
    private showService: TvshowService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.getShowByGenre()); 
  }

  ngOnInit(): void {
    this.getShowByGenre();
  }

  getShowByGenre() {
    let term = this.route.snapshot.paramMap.get("term");
    this.genre = term.slice(0,1).toUpperCase() + term.slice(1);

    this.showService.getAllShows().subscribe(data => this.showsByGenre = this.showService.getShowByGenre(data, this.genre));
    
  }

}
