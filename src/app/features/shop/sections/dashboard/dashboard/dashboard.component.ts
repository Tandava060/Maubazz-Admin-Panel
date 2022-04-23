import { Component, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public api: ProductApiService) { }

  ngOnInit() {
    // this.api.testServer().subscribe({
    //   next: (res)=> console.log(res),
    //   error: (err)=> console.log(err),
    //   complete: (data: any) => {
    //     console.log(data)
    //   }
    // })
    this.api.testServer().subscribe({
      next: (res)=> {console.log(res)},
      error: (err) => {console.log(err)},
      complete: () => {console.log("complete")}
    })
  }

}
