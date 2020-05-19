import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TvshowService } from './tvshow.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { ShowDetailsComponent } from './show-details/show-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EpisodesComponent } from './episodes/episodes.component';

@NgModule({
  declarations: [
    AppComponent,
    TvShowComponent,
    MainPageComponent,
    ShowDetailsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TvshowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
