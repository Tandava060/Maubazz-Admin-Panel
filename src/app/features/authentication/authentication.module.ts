import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    
  ],
  imports: [
    CommonModule,
    MatFormFieldModule
  ]
})
export class AuthenticationModule { }
