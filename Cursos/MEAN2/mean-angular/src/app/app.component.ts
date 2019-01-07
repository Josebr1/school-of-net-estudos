import { AppService } from './services/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private appService: AppService) {


  }

  ngOnInit() {
    this.appService.fetchServer().subscribe(data => {
      console.log(data);
    });
  }
}
