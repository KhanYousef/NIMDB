import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { RatingsComponent } from './ratings/ratings.component';
import { DirectorsComponent } from './directors/directors.component';
import { WritersComponent } from './writers/writers.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HeaderComponent },
  { path: 'Reviews', component: IntroComponent },
  { path: 'Movies', component: MoviesComponent },
  { path: 'Actors', component: ActorsComponent },
  { path: 'Ratings', component: RatingsComponent },
  { path: 'Directors', component: DirectorsComponent },
  { path: 'Writers', component: WritersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
