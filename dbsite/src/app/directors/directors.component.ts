import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-directors',
  templateUrl: './directors.component.html',
  styleUrls: ['./directors.component.css']
})
export class DirectorsComponent implements OnInit {

directors;
somedirector;

  constructor(private http : HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/directors').subscribe(data => {

      this.directors = data;
      console.log(data);

    });
  }

  onSelect(director){
    this.http.get('http://localhost:3000/directors/' + director.Id).subscribe(data => {

      this.somedirector = data[0];
      console.log(data[0]);

    });
  }

}
