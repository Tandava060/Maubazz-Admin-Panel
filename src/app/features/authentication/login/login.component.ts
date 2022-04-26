import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(public fb: FormBuilder, private router: Router, private api:AuthenticationService) { }

 

  ngOnInit(): void {
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.api.login(this.loginForm.value).subscribe({
        next: (res)=> {
          console.log(res)
          localStorage.setItem('user_session',JSON.stringify(res.data))
          console.log(JSON.parse(localStorage.getItem('user_session')))
      },
      error: (err) => {console.log(err)},
      complete: () => {
        this.router.navigateByUrl("shop/products")
      }
      }) 
      // 
    }
  }

}
