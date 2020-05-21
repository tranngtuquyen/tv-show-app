import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';
  genres: string[] = [
    'Action', 'Anime', 'Comedy', 'Crime', 'Drama', 'Family', 'Fantasy', 'Horror',
    'Mystery', 'Romance', 'Supernatural', 'Thriller'
  ];
}
