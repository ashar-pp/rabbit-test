import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      'name': this.formBuilder.group({
        'title':[''],
        'first':[''],
        'last':['']
      }),
      'email': [null, [Validators.required]],
      'gender': [null, [Validators.required]],
      'dob': [(new Date()).toISOString()],
      'phone': [null, [Validators.required]],
      'username': [null, [Validators.required]],
      'password': [null, [Validators.required]]
    });
  }

  ngOnInit() {

  }


  get name() {
    return this.formGroup.get('name') as FormControl
  }




  onSubmit(post: any) {
    this.post = post;
  }

}
