import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NewProductComponent } from 'src/app/features/shop/sections/products/components/new-product/new-product.component';
import { Shop } from 'src/app/models/shop';
import { ShopApiService } from 'src/app/services/shop-api.service';
import { NewShopComponent } from './components/new-shop/new-shop.component';




@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
})


export class ShopsComponent implements OnInit {

  constructor(public dialog: MatDialog, private api: ShopApiService) {
   }

  shops: Shop[] = [];

  ngOnInit(): void {
    this.api.get().subscribe({ 
      next: (res: any)=> {
        this.shops = res.data
        this.dataSource = new MatTableDataSource(this.shops);
        console.log(this.shops)
    },
    error: (err) => {
      console.log(err)
    },
    complete: () => {
    }
  
  })
  }

  displayedColumns: string[] = ['No', 'Name', 'Owner', 'TelNo', 'Email', 'Type', 'View'];
  dataSource: MatTableDataSource<Shop>;

  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  
    
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }


  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
}

openDialog(): void {
  const dialogRef = this.dialog.open(NewShopComponent, {
    width: '75%',

  });


}

}

