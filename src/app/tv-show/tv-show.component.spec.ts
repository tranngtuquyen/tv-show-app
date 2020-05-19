import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TvShowComponent } from './tv-show.component';
import { TvshowService } from '../tvshow.service';
import { TvshowServiceFake } from '../tvshow.service.fake';
import { TruncateTextPipe } from '../truncate-text.pipe';

describe('TvShowComponent', () => {
  let component: TvShowComponent;
  let fixture: ComponentFixture<TvShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowComponent,
        TruncateTextPipe ],
      
      providers: [
        {provide: TvshowService, useClass:
        TvshowServiceFake}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
