import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.body)
    request = request.clone({
      body: {
        auth: {
          api_key: "jdnvkendklmldkgbmkb"
        },
        data: request.body
      }
    })
     
    
    return next.handle(request);

  }
}
