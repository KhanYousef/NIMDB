import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  ratings;

  constructor(private http : HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/ratings').subscribe(data => {

      this.ratings = data;
      console.log(data);

    });
  }

}
