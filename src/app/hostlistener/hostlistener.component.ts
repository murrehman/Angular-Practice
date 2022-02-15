import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hostlistener',
  templateUrl: './hostlistener.component.html',
  styleUrls: ['./hostlistener.component.css']
})
export class HostlistenerComponent implements OnInit {

  contact: any = 'Contact Us';
  date: any = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click') myClick() {
    // alert('clicked')
  }

  @HostListener('window:scroll', ['$event']) myScroll() {
    console.log('Scrolling')
  }

}
