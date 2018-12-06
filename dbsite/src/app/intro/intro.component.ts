import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ninvoke } from 'q';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  movies;
  reviews;

  id: string;
  content: string;

  constructor(private http : HttpClient, private router:Router) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/movies').subscribe(data => {

      this.movies = data;
      console.log(data);

    });
  }


  onSelect(movie){

    this.http.get('http://localhost:3000/reviews/' + movie.Id).subscribe(data => {

      this.reviews = data;
      console.log(data);

    });

  }

  getFilmId(e){
    this.id = e.target.value;
  }

  getFilmReview(e){
    this.content = e.target.value;
  }

  addReview(id,review){
    console.log(this.id);
    console.log(this.content);
    if(this.id == null || this.content == "" || this.id == "" || this.content == null){
      return;
    }

    this.http.post('http://localhost:3000/reviews/add',{
      add: this.content,
      id: this.id
    }).subscribe(data => {
      this.router.navigate(['/']);
    });

  }


}
