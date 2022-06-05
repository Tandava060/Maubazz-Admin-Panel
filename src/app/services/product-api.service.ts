import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    return this.http.post("/api/test", data)
    .pipe(map((data:any)=>{
      return data
    }))
  }

  addImage(data:any) {
    const postData = new FormData();
    postData.append("color",data.color);
    postData.append("image", data.url)
    return this.http.post("http://130.61.174.76:4000/api/image/add-image", postData)
    .pipe(map((data:any)=>{
      return data
    }))
  }

  addProd(data:any) {
    return this.http.post("http://130.61.174.76:4000/api/owner/add-product", data)
    .pipe(map((data:any)=>{
      return data
    }))
  }

}
