import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})



export class MoviesComponent implements OnInit {

  movies;
  moviesinfo;
  moviesbyyears;

  // constructor() { }
  constructor(private http : HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/movies').subscribe(data => {

      this.movies = data;
      console.log(data);

    });
  }


  onSelect(movie){

    this.http.get('http://localhost:3000/moviestuff/' + movie.Id).subscribe(data => {

      this.moviesinfo = data[0];
      console.log(data[0]);

    });

  }

  onYearChange(yearSelected){

    this.http.get('http://localhost:3000/movies/' + yearSelected).subscribe(data => {


      this.moviesbyyears = data;
      console.log(data);

    });
    
  }

}
