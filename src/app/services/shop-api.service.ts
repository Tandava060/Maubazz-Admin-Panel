import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopApiService {

  constructor(private http: HttpClient) { }

  addShop(data:any) {
    return this.http.post("http://130.61.174.76:4000/api/admin/add-shop", data)
    .pipe(map((data:any)=>{
      return data
    }))
  }

  get() {
    let data = {
      search: {},
      populate: true
    }
    return this.http.post("http://130.61.174.76:4000/api/v1/get-shop", data)
    .pipe(map((data:any)=> {
      return data
    }))
  }

}
