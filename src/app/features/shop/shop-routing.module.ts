import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './sections/banner/banner/banner.component';
import { DashboardComponent } from './sections/dashboard/dashboard/dashboard.component';
import { ProductsComponent } from './sections/products/products/products.component';
import { ShopSettingComponent } from './sections/shop_setting/shop-setting/shop-setting.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      {
        path: 'dashboard',
    component: DashboardComponent
      },
      {
        path: 'products',
    component: ProductsComponent
      },
      {
        path: 'banners',
    component: BannerComponent
      },
      {
        path: 'setting',
    component: ShopSettingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
