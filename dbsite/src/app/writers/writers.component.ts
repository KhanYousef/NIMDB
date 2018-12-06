import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-writers',
  templateUrl: './writers.component.html',
  styleUrls: ['./writers.component.css']
})
export class WritersComponent implements OnInit {

writers;
somewriter;

  constructor(private http : HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/writers').subscribe(data => {

      this.writers = data;
      console.log(data);

    });
  }

  onSelect(writer){
    this.http.get('http://localhost:3000/writers/' + writer.Id).subscribe(data => {

      this.somewriter = data[0];
      console.log(data[0]);

    });
  }

}
