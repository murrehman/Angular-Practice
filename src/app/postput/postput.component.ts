import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgProductsService } from '../appServices/ng-products.service';

@Component({
  selector: 'app-postput',
  templateUrl: './postput.component.html',
  styleUrls: ['./postput.component.css']
})
export class PostputComponent implements OnInit {

  constructor(private _ngProducts: NgProductsService) { }

  dataTitle: any = this._ngProducts.getDataTitle();
  fetching: any = false;
  @ViewChild('id') id!: ElementRef<any>;
  @ViewChild('name') name!: ElementRef<any>;
  @ViewChild('price') price!: ElementRef<any>;
  editMode: any = false;
  editIndex: any;

  products = [
    {
      id: 'p1',
      name: 'Laptop',
      price: 45000
    },
    {
      id: 'p2',
      name: 'Mobile',
      price: 45000
    }
  ]

  ngOnInit(): void {

    this.onFetchProduct()
  }

  onAddProduct(id: any, name: any, price: any) {
    if (this.editMode) {
      this.products[this.editIndex] = {
        id: id.value,
        name: name.value,
        price: price.value
      }
      this.editMode = false;
      this.id.nativeElement.value = ''
      this.name.nativeElement.value = ''
      this.price.nativeElement.value = ''

    } else {
      this.products.push({
        id: id.value,
        name: name.value,
        price: price.value
      })
    }

    this.onSaveProduct()

  }

  onSaveProduct() {
    this._ngProducts.saveProducts(this.products).subscribe(res => {
      console.log(res)
    })
  }


  onFetchProduct() {
    this.fetching = true;
    this._ngProducts.fetchProducts().subscribe(res => {
      console.log(res)
      const data = JSON.stringify(res);
      this.products = JSON.parse(data);
      this.fetching = false;
    })
  }

  onDeleteProduct(id: any) {
    if (confirm('Do you want to delete this product?')) {
      this.products.splice(id, 1)
    }

    this.onSaveProduct()

  }

  onEditProduct(index: any) {
    this.editIndex = index;
    this.editMode = true
    console.log(this.products[index])
    this.id.nativeElement.value = this.products[index].id
    this.name.nativeElement.value = this.products[index].name
    this.price.nativeElement.value = this.products[index].price
  }

}
