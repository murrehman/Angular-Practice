import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  constructor() { }

  myName: any = "Touseef";
  ngOnInit() {
    // console.log("My name is touseef0000000000000000000000000000000000000000000000");

  }
}
