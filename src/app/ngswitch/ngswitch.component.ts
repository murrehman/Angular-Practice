import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {
  selectedProduct: any;

  constructor() { }

  ngOnInit(): void {
  }

  //selectedProduct: any;

  getProductValue(val: any) {
    console.log(val.target.value)
    this.selectedProduct = val.target.value;
  }

}
