import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailsComponent } from './search-details.component';
import { TvshowService } from '../tvshow.service';
import { TvshowServiceFake } from '../tvshow.service.fake';

describe('SearchDetailsComponent', () => {
  let component: SearchDetailsComponent;
  let fixture: ComponentFixture<SearchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDetailsComponent ],
      providers: [
        {provide: TvshowService, useClass:
        TvshowServiceFake}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
