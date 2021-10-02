import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  constructor(private formBuilder: FormBuilder, private router: Router, private userservice: UserService) {
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




  onSubmit() {
    if(this.formGroup.valid){
      const form = this.formGroup.value;
      this.userservice.submitUser(form);
      this.router.navigate(['/home']);
    }else{
      alert('has validator error');
    }
    console.log(this.formGroup);
  }
  back(): void {
    this.router.navigate(['/home']);

  }
}
