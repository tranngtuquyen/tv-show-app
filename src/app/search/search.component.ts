import { Component,Output,EventEmitter,OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { TvshowService } from '../tvshow.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  search=new FormControl('', [Validators.minLength(3)]);
  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges
       .pipe(debounceTime(1000))
       .subscribe((searchValue: string) => {
      if (!this.search.invalid) {
        this.searchEvent.emit(searchValue);
      }
    })
}

}


      /*.subscribe((searchValue: string) => {
        if (searchValue){
          const userInput = searchValue;
          this.tvshowService.getTvShowSearch(userInput).subscribe(data => console.log(data));
            }
      })*/





