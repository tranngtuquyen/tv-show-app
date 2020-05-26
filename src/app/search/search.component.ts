import { Component,Output,EventEmitter,OnInit, Input } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { TvshowService } from '../tvshow.service';
import { debounceTime } from 'rxjs/operators';
import { IShow } from '../ishow';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
 searchWord:string;

  // @Output() searchEvent = new EventEmitter<string>();
  search=new FormControl('', [Validators.minLength(3)]);

  constructor(private tvshowService: TvshowService, private route: ActivatedRoute, private router: Router) {
    
   }
  ngOnInit(): void {
    this.search.valueChanges
       .pipe(debounceTime(800))
       .subscribe((searchWord: string) => {
      if (!this.search.invalid) {
       this.router.navigate(['/info',searchWord]);
      }    })
  }

  onKey(event: any){
      event.target.value=''; //clears the input field when the search bar loses focus.
      // this.router.navigate(['/info',this.searchWord]); 
    }
}

// }

// this.search.valueChanges
//       .subscribe((searchValue: string) => {
//         if (searchValue){
//           const userInput = searchValue;
//           this.tvshowService.getTvShowSearch(userInput).subscribe(data => this.result=data);
//             }
//       })

//     }
//   }

  
// this.search.valueChanges.subscribe((searchValue: string) => this.tvshowService.onSearch(searchValue).subscribe((data) =>this.show=data))
    
//   }
