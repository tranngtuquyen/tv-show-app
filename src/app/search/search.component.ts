import { Component,OnInit} from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search=new FormControl('', [Validators.minLength(3)]);

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.search.valueChanges
       .pipe(debounceTime(800))
       .subscribe((searchWord: string) => {
      if (searchWord && !this.search.invalid) {
       this.router.navigate(['/info',searchWord]);

      }
    })
  }

  onKey(event: any){
      event.target.value='';
      //clears the input field when the search bar loses focus.

    }
}


