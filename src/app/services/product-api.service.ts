import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {


  constructor(private http: HttpClient) { }

  testServer() {
    const data = {
      "sqlw" : "update shop_owner set login_count = 0 where username = 'chaviJ'",
      "sql" : "select * from shop_category",
      "sqlqwe" : "delete from shop_owner"
    }
    return this.http.post("http://localhost:4000/api/test", data)
    .pipe(map((data:any)=>{
      return data
    }))
  }

}
