import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TvshowService } from './tvshow.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowComponent } from './tv-show/tv-show.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TvshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
