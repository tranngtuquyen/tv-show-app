import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TruncateTextPipe } from '../truncate-text.pipe';
import { SeasonsComponent } from './seasons.component';
import { TvshowService } from '../tvshow.service';
import { TvshowServiceFake } from '../tvshow.service.fake';

describe('SeasonsComponent', () => {
  let component: SeasonsComponent;
  let fixture: ComponentFixture<SeasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonsComponent, TruncateTextPipe ],
      providers: [
        {provide: TvshowService, useClass:
        TvshowServiceFake}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
