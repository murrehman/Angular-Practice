import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-stle',
  templateUrl: './class-stle.component.html',
  styleUrls: ['./class-stle.component.css']
})
export class ClassStleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mypro: boolean = false;

  myStyle1 = "15px"
  isActive = false;

  mtlclasses = {
    class1: true,
    class2: true,
    class3: true
  }

  mltStyle = {
    'background': 'red',
    'border': '10px solid green'
  }

}
