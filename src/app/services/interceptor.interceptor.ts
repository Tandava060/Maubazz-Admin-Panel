import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private auth: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(this.auth.isLoggedIn())
    // if (this.auth.isLoggedIn()) {
    //   let data = JSON.parse(localStorage.getItem('user_session'))
    //   console.log(data)
    //   request = request.clone({
    //     setHeaders: {
    //       Authorization: "jdnvkendklmldkgbmkb",
    //       // userId: data.id,
          // access_type: data.access_type
    //     }
       
    //   })
    // } else {
      request = request.clone({
        setHeaders: {
          Authorization: "jdnvkendklmldkgbmkb"
        }
       
      })
    // }
    
    //  console.log(request)
    
    return next.handle(request);

  }
}
