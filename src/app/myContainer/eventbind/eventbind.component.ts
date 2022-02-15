import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  msg: string = "";

  onAddCart(event: any) {
    this.msg = event.target.value + " Added in Cart!"
  }

  onInputClick(event: any) {
    console.log(event.target.value);
  }

  getInputInfo(my: any) {
    console.log(my.value);
  }

}
