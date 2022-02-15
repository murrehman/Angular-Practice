import { Component, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() productSelected: boolean = false;
  @Input() selectedProduct: any;
  @Output() addedProduct = new EventEmitter();

  onAddProduct() {
    this.addedProduct.emit(this.selectedProduct);
  }

}
