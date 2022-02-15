import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string = "john doe";

  ngOnInit(): void {
  }

  constructor(private _designServices: DesignutilityService) {
    this._designServices.userName.subscribe(uname => this.userName = uname)
  }

  statusOnline: boolean = true;

  products = [
    { name: 'Laptop' },
    { name: 'Mobile' },
    { name: 'TV' },
    { name: 'Washing Machine' }
  ]



}
