import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../appServices/designutility.service';
import { MessageService } from '../appServices/message.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor(private _msgService: DesignutilityService) { }

  products: any = [];

  ngOnInit(): void {
    // this.products = this._msgService.products;
    this._msgService.products().subscribe(
      productData => this.products = productData);
  }

  btnClick() {
    this._msgService.messageAlert();
  }

}
