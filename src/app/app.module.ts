import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { ShopModule } from './features/shop/shop.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './global/spinner/spinner.component';
import { InterceptorInterceptor } from './services/interceptor.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminModule } from './features/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    AuthenticationModule,
    AdminModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    ToastrModule.forRoot({
      timeOut: 5000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    closeButton: true
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: InterceptorInterceptor, 
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
