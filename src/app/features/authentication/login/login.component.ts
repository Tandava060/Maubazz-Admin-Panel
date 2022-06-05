import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(public fb: FormBuilder, private router: Router, private api:AuthenticationService, private spinner: SpinnerService) { }

 

  ngOnInit(): void {
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.spinner.showSpinner();
      let data = {
       data : {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
       }
      }
      this.api.login(data).subscribe({
        next: (res)=> {
          localStorage.setItem('user_session',JSON.stringify(res.data))
      },
      error: (err) => {
        console.log(err)
       this.spinner.hideSpinner();
      },
      complete: () => {
        let user_session = JSON.parse(localStorage.getItem('user_session'));
        this.spinner.hideSpinner();
        if (user_session.access_type == "admin") {
          this.router.navigateByUrl("admin")
        } else {
          this.router.navigateByUrl("shop/products")
        }
        
      }
      }) 
    }
  }

}
