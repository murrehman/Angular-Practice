import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgforComponent } from '../ngfor/ngfor.component';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {


  defaultCourse: any = 'Angular';
  userName: any = '';
  defaultGender: any = 'Male ';
  genders: any[] = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    }
  ]

  submitted = false;
  formData = {
    username: '',
    email: '',
    course: '',
    gender: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.submitted = true;
    this.formData.username = form.value.userDetails.username;
    this.formData.email = form.value.userDetails.email;
    this.formData.course = form.value.course;
    this.formData.gender = form.value.gender

    form.reset();
  }

  setUsername(form: NgForm) {
    // form.setValue({
    //   userDetails: {
    //     username: 'rehman',
    //     email: ''
    //   },
    //   course: '',
    //   gender: 'Female'
    // })

    form.form.patchValue({
      userDetails: {
        username: 'rehman',
      }
    })
  }

}
