import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  @Input() order: Order;
  @Input() expandToggle: any;

  total: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.order.products.forEach(x => this.total =  x.price + this.total);
  }

}
