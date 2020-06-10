import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvShowComponent } from './tv-show/tv-show.component';
import { MainPageComponent } from './main-page/main-page.component'
import { GenreComponent } from './genre/genre.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { SearchDetailsComponent } from './search-details/search-details.component';

//import all the components used for routing

const routes: Routes = [

{
  path:'details/:id',
  //Given this path, should route to tv-show Component
  component: TvShowComponent
},
{

  path:'',
  //empty path should route to main-page component
  component: MainPageComponent
},
{
  path: 'genre/:term',
  //this path should route to genre component
  component: GenreComponent
},
{
  path: 'seasons/:id',

  component: SeasonsComponent
},
{
  path: 'info/:searchWord',
  component: SearchDetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
