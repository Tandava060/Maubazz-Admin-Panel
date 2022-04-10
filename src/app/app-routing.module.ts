import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
    import ('./features/authentication/authentication-routing.module').then((m) => m.AuthenticationRoutingModule),
  },
  {
    path: "shop/:id",
    loadChildren: () =>
    import ('./features/shop/shop-routing.module').then((m) => m.ShopRoutingModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
