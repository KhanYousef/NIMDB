import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';
import { RatingsComponent } from './ratings/ratings.component';
import { DirectorsComponent } from './directors/directors.component';
import { WritersComponent } from './writers/writers.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    FooterComponent,
    HeaderComponent,
    MoviesComponent,
    ActorsComponent,
    RatingsComponent,
    DirectorsComponent,
    WritersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
