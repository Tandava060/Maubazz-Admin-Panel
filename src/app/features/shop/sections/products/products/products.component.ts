import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/models/product';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewProductComponent } from '../components/new-product/new-product.component';




var products: Product[] =
  [
    {
      id: "625317ec90e4f14369692a10",
      name: "Renee",
      price: 3755.75,
      discount: 8,
      img: [
        {url: "https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "blue"},
        {url: "https://images.unsplash.com/photo-1550234646-8d03f6e034fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "blue"},
        {url: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "brown"},
      
      ],
      colors: ["brown","blue","brown"],
      size: ["medium","small","large"],
      quantity: 100,
      description: "Mollit ut veniam non sit. Consequat Lorem cillum ut in labore ipsum sunt laboris mollit nulla. Do sint anim deserunt anim elit commodo tempor. Nostrud laboris est ut aute tempor dolore laborum.\r\n",
      category: ["anim"]
    },
    {
      id: "625317ecfcb4ded6459b00de",
      name: "White",
      price: 3684.43,
      discount: 1,
      img: [
        {url: "https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "blue"},
        {url: "https://images.unsplash.com/photo-1550234646-8d03f6e034fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "blue"},
        {url: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "brown"},
      
      ],
      colors: ["brown","brown","green"],
      size: ["medium","large","medium"],
      quantity: 62,
      description: "Ad excepteur anim commodo id ea tempor. Laborum proident ex veniam enim nulla velit. Tempor non sunt fugiat proident aliquip ut ad in ea esse enim. Id amet Lorem laboris sint. Cupidatat enim enim culpa excepteur amet do do.\r\n",
      category: ["consequat"]
    },
    {
      id: "625317ec5e407ffe891d9377",
      name: "Wagner",
      price: 3171.67,
      discount: 3,
      img: [
        {url: "https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "blue"},
        {url: "https://images.unsplash.com/photo-1550234646-8d03f6e034fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "blue"},
        {url: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "brown"},
      
      ],
      colors: ["green","green","brown"],
      size: ["large","medium","medium"],
      quantity: 62,
      description: "Ad tempor quis dolor ea proident consequat laboris non irure excepteur amet sint. Do exercitation fugiat mollit voluptate deserunt qui magna commodo eu officia id. In laboris exercitation ex pariatur aute consequat sunt ullamco non minim. Velit incididunt nostrud aliqua elit Lorem cupidatat voluptate.\r\n",
      category: ["cupidatat"]
    },
    {
      id: "625317ec6bad395b08ccc99a",
      name: "Elise",
      "price": 1214,
      discount: 1,
      img: [
        {url: "https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "blue"},
        {url: "https://images.unsplash.com/photo-1550234646-8d03f6e034fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "blue"},
        {url: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "brown"},
      
      ],
      colors: ["blue","brown","brown"],
      size: ["medium","small","large"],
      quantity: 32,
      description: "Amet ut velit pariatur enim ad. Nostrud pariatur qui non quis minim qui labore magna exercitation esse nisi. Ipsum in ex cillum tempor nostrud fugiat laboris irure nisi labore. Ad anim ut labore adipisicing sunt mollit.\r\n",
      category: ["in"]
    },
    {
      id: "625317eccef8f09c6a6efbc1",
      name: "Shawna",
      "price": 1607,
      discount: 9,
      img: [
        {url: "https://images.unsplash.com/photo-1547731030-cd126f44e9c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "blue"},
        {url: "https://images.unsplash.com/photo-1550234646-8d03f6e034fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "blue"},
        {url: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        color: "brown"},
      
      ],
      colors: ["blue","blue","brown"],
      size: ["medium","large","large"],
      quantity: 92,
      description: "Irure occaecat nostrud est commodo enim qui occaecat tempor voluptate nulla ad ipsum. Qui in sunt esse occaecat non elit ullamco magna. Quis cupidatat mollit mollit adipisicing sint laborum sunt cupidatat fugiat ad proident officia. Duis enim amet Lorem ut occaecat est officia. Ut consectetur aliqua laboris labore amet voluptate duis.\r\n",
      category: ["consequat"]
    }
  ]


/** Constants used to fill up our data base. */

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})

export class ProductsComponent implements AfterViewInit {

 
    displayedColumns: string[] = ['id', 'name', 'category', 'quantity'];
    dataSource: MatTableDataSource<Product> = new MatTableDataSource(products);
    expandedElement: Product | null;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    constructor(public dialog: MatDialog) {}
  
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

    expanderToggle(element: Product | null) {

      this.expandedElement = this.expandedElement === element ? null : element
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }


    openDialog(): void {
      const dialogRef = this.dialog.open(NewProductComponent, {
        width: '75%',
    
      });
  
   
    }
  }
  

  
