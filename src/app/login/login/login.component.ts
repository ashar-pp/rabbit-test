import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  error = '';
  constructor(private router:Router,private userService: UserService) { }

  ngOnInit(): void {
  }


  submit() {
    this.error = '';
    if (this.form.valid) {
      this.userService.login(this.form.value).subscribe((resp:any)=>{
        if(resp.success){
          localStorage.setItem('loggedUser', JSON.stringify(resp.user));
          this.router.navigate(['/home']);
        } else {
          this.error = resp.message;
        }
      })

    }
  }

}
