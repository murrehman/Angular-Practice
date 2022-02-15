import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  constructor(private _designServices: DesignutilityService) {
    this._designServices.userName.subscribe(uname => this.userName = uname)
  }

  ngOnInit(): void {
  }

  userName: any;

  updateUserName(newItem: any) {
    // this.userName = newItem.value;
    this._designServices.userName.next(newItem.value);
  }
}
