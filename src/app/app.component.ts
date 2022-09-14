import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  name: string = '';
  constructor(private servicio: ApiService) { }
  ngOnInit(): void {

  }
  search() {
    this.servicio.getData(this.name).subscribe(data => {
      console.log(data)
    });
  }


}
