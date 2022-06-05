import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/models/order';

var orders: Order[] = [
  {
  id: "3588406904474791",
  products: [
    {
        name: "bag",
        quantity: 3,
        price: 98.00
    },
    {
      name: "Pen",
      quantity: 15,
      price: 130.00
  },
  {
    name: "book",
    quantity: 20,
    price: 12.00
}
],
location: {
  attitude: "108.8944226",
  longitude: "34.2623634"
},
  paymentStatus: true,
   deliveryStatus: false,
  date: new Date("12/8/2021"),
  deliveryDate: new Date("3/14/2022"),
  userId: "5602231574952430",
  paymentType: "jcb"
}, 
{
  id: "4936062122417570",
  products: [
    {
        name: "bag",
        quantity: 3,
        price: 98.00
    },
    {
      name: "Pen",
      quantity: 15,
      price: 130.00
  },
  {
    name: "book",
    quantity: 20,
    price: 12.00
}
],
location: {
  attitude: "108.8944226",
  longitude: "34.2623634"
},
  paymentStatus: true,
   deliveryStatus: false,
  date: new Date("4/13/2022"),
  deliveryDate: new Date("1/26/2022"),
  userId: "5641825411811579620",
  paymentType: "switch"
}]

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = [ 'no','id', 'userId', 'paymentStatus', 'deliveryStatus'];
    dataSource: MatTableDataSource<Order> = new MatTableDataSource(orders);
    expandedElement: Order | null;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }

    getExpandToggle():any {
      return {
        callExpandToggle: (name:any) => {
          this.expanderToggle(null)
        }
      }
    }

    expanderToggle(element: Order | null) {

      this.expandedElement = this.expandedElement === element ? null : element
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }


  

}
