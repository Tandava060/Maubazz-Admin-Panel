import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(data:any): Observable<any> {
    return this.http.post("/api/login", data)
    .pipe(map((data:any)=>{
      return data
    }))
  }

  isLoggedIn() {
    return !!localStorage.getItem('user_session')
  }

  logout() {
    localStorage.clear()
  }

}
