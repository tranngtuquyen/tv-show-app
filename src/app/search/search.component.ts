import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search=new FormControl();
  constructor(private tvshowService: TvshowService) { }

  ngOnInit(): void {
    this.search.valueChanges
      .subscribe((searchValue: string) => {
        if (searchValue){
          const userInput = searchValue;
          this.tvshowService.getTvShowSearch(userInput).subscribe(data => console.log(data));
            }
      })
  }

  }


