import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  url = 'https://ngproducts1-a6043-default-rtdb.firebaseio.com//user.json'
  @ViewChild('userForm') userForm!: NgForm
  users: any = [];
  dataTitle: any = 'Users';
  editMode: boolean = false;
  editUserId: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.fetchUser()
  }


  onFetchUser() {

  }

  onAddUser(userData: User) {
    // console.log(userData)
    if (this.userForm.valid) {
      if (this.editMode) {

        this.http.put('https://ngproducts1-a6043-default-rtdb.firebaseio.com//user/' + this.editUserId + '.json', userData).subscribe(res => {
          this.fetchUser();
        })
      } else {
        this.users.push(userData)
        this.http.post<User>(this.url, userData).subscribe(res => {
          console.log(res)
        })
      }

    } else {
      let key = Object.keys(this.userForm.controls);
      key.filter(data => {
        let control = this.userForm.controls[data];
        if (control.errors != null) {
          control.markAsTouched();
        }
      })
    }

  }

  fetchUser() {
    this.http.get<any>(this.url).pipe(map(resData => {
      const userArray = [];
      console.log(resData)
      for (const key in resData) {
        if (resData.hasOwnProperty(key)) {
          userArray.push({ userId: key, ...resData[key] })
        }
      }
      return userArray
    })).subscribe(users => {
      this.users = users;

    })
  }

  onDeleteUser(userId: any) {
    console.log(userId)
    this.http.delete('https://ngproducts1-a6043-default-rtdb.firebaseio.com//user/' + userId + '.json').subscribe(res => {
      this.fetchUser()
    })
  }


  onEditUser(userId: any, index: any) {
    console.log(this.users[index])
    this.editMode = true;
    this.editUserId = userId;
    this.userForm.setValue({
      name: this.users[index].name,
      technology: this.users[index].technology
    })
  }


}
