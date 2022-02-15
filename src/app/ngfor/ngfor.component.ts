import { JsonPipe } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  products = [
    { proimg: 'assets/lptp.jpg', name: 'Laptop', id: 'pro01', price: '1500' },
    { proimg: 'assets/mbl.jpg', name: 'Mobile', id: 'pro02', price: '1100' },
    { proimg: 'assets/tv.jpg', name: 'TV', id: 'pro03', price: '1200' },
    { proimg: 'assets/wm.jpg', name: 'Washing Machine', id: 'pro04', price: '1400' }
  ]

  users: any = [];

  onCreateUser(uname: any) {
    this.users.push({ name: uname.value });

    if (this.users.length > 3) {
      //alert("More than 3");
      this.router.navigate(['products'])
    }
  }

  onRemoveUser() {
    this.users.splice(this.users.length - 1)

  }

  onRemoveItem(item: any) {
    this.users.splice(item, 1)
  }

}
