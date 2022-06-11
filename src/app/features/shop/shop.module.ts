import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { BannerComponent } from './sections/banner/banner/banner.component';
import { ProductsComponent } from './sections/products/products/products.component';
import { ShopSettingComponent } from './sections/shop_setting/shop-setting/shop-setting.component';
import { DashboardComponent } from './sections/dashboard/dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductDetailsComponent } from './sections/products/components/product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgUploadComponent } from './sections/products/components/img-upload/img-upload.component';
import { NewProductComponent } from './sections/products/components/new-product/new-product.component';

import { OrdersComponent } from './sections/orders/orders.component';
import { OrderDetailsComponent } from './sections/orders/components/order-details/order-details.component';
@NgModule({
  declarations: [
    ShopComponent,
    SidebarComponent,
    BannerComponent,
    ProductsComponent,
    ShopSettingComponent,
    DashboardComponent,
    ProductDetailsComponent,
    ImgUploadComponent,
    NewProductComponent,
    OrdersComponent,
    OrderDetailsComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    ReactiveFormsModule, 
    MatSelectModule,
    MatDialogModule
  ]
})
export class ShopModule { }
