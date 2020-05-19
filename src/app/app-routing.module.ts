import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//imported components required for routing
import { ShowDetailsComponent } from './show-details/show-details.component';
import { MainPageComponent } from './main-page/main-page.component'
import { EpisodesComponent } from './episodes/episodes.component';



const routes: Routes = [
// added path
  {
    path: 'details/:id', //Given this path, should route to ShowDetailsComponent
    component: ShowDetailsComponent
  },
  {
    path:'', //empty path should route to main-page component
    component: MainPageComponent
  },
  {
    path: 'details/:id/episodes',
    component: EpisodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
