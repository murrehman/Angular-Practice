import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http: HttpClient) { }

  messageAlert() {
    alert("Thank for Subscribe!")
  }

  // products = [
  //   { name: "laptop", id: "001" },
  //   { name: "mobile", id: "002" },
  //   { name: "tv", id: "003" },
  //   { name: "washingmachine", id: "004" }
  // ]

  url = 'https://jsonplaceholder.typicode.com/users'
  products(): Observable<any> {
    return this.http.get(this.url);
  }

  userName = new BehaviorSubject('John Doe');


}
