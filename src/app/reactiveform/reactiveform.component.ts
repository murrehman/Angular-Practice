import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm!: FormGroup;
  formstatus: any;
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


  notAllowedNames = ['shit', 'nigger']

  constructor() { }

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'userDetail': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.NaNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.NaEmails),
      }),

      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required),
      ])
    })

    // REACTIVE FORM VALUECHANGES()
    // this.myReactiveForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // })

    // REACTIVE FORM STATUSCHANGES()
    this.myReactiveForm.statusChanges.subscribe((status) => {
      console.log(status);
      this.formstatus = status;
    })


    // REACTIVE FORM SETVALUE()
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetail': {
    //       'username': 'rehman',
    //       'email': 'yahoo@yahoo.com'
    //     },
    //     'course': 'HTML',
    //     'gender': 'Male',
    //     'skills': [
    //       'asdasd'
    //     ]
    //   })
    // }, 2000)


    // REACTIVE FORM PATCHVALUE()
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'userDetail': {
          'email': 'yahoo@yahoo.com'
        }
      })
    }, 2000)

  }

  onSubmit() {
    console.log(this.myReactiveForm)
    this.myReactiveForm.reset({
      'userDetail': {
        'username': '',
        'email': ''
      },
      'course': 'HTML',
      'gender': 'Male',
      'skills': [
        ''
      ]
    });
  }


  getControls() {
    return (this.myReactiveForm.get('skills')! as FormArray).controls;
  }

  onAddSkills() {
    (<FormArray>this.myReactiveForm.get('skills')!).push(new FormControl(null, Validators.required))
  }


  NaNames(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return { 'nameIsNotAllowed': true }
    }
    return null;
  }

  NaEmails(control: AbstractControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'rehman@mail.com') {
          resolve({ 'emailNotAllowed': true })
        } else {
          resolve(null)
        }
      }, 2500);
    })
    return myResponse;
  }

}
