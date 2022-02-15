import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private _designServices: DesignutilityService) {
    this._designServices.userName.subscribe(uname => { this.userName = uname })
    console.log(this.userName)
  }

  ngOnInit(): void {
  }
  userName: any;

  updateUserName(newItem: any) {
    // this.userName = newItem.value;
    this._designServices.userName.next(newItem.value);
  }

}
