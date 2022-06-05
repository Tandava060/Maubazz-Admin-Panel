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
    console.log(request.url);
    if(request.url.includes("add-image") || request.url.includes("login")){
      request = request.clone({
        setHeaders: {
          Authorization: "jdnvkendklmldkgbmkb"
        }
      })
      return next.handle(request);
    }else{
      request = request.clone({
        setHeaders: {
          Authorization: "jdnvkendklmldkgbmkb"
        },
        body: {
          auth: this.getSessionUser(),
          data: request.body
        }
      })
      return next.handle(request);
    }
  }

 getSessionUser() {
    var user_session : any = localStorage.getItem('user_session');
    console.log(localStorage.getItem('user_session'));
    if(user_session == null){
      return "";
    }
    return {
      id: user_session.id,
      username: user_session.username,
      access_type: user_session.access_type,
      shop_id: user_session.shop_id
    }
  }

}
