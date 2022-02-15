import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../appPipes/filter.pipe';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrls: ['./filterpipe.component.css']
})
export class FilterpipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nameSearch: any = '';

  productArr: any[] = [
    {
      sno: 1,
      name: 'Mobile',
      price: '7000',
      availablitiy: 'available'
    },
    {
      sno: 2,
      name: 'Laptop',
      price: '40000',
      availablitiy: 'available'
    },
    {
      sno: 3,
      name: 'Mobile(Iphone)',
      price: '71000',
      availablitiy: 'available'
    },
    {
      sno: 4,
      name: 'TV',
      price: '16000',
      availablitiy: 'Not Available'
    },
    {
      sno: 5,
      name: 'Mobile(samsung)',
      price: '9000',
      availablitiy: 'available'
    },
    {
      sno: 6,
      name: 'Laptop(HP)',
      price: '50000',
      availablitiy: 'available'
    },
    {
      sno: 7,
      name: 'TV(Toshiba)',
      price: '18000',
      availablitiy: 'Available'
    }

  ]

}
