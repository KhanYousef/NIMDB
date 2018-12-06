import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors;
  someactor;

  constructor(private http : HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/actors').subscribe(data => {

      this.actors = data;
      console.log(data);

    });
  }


  onSelect(actor){
    this.http.get('http://localhost:3000/actors/' + actor.Id).subscribe(data => {

      this.someactor = data[0];
      console.log(data[0]);

    });
  }

}
