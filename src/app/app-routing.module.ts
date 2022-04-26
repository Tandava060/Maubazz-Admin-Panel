import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/authentication/auth.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
    import ('./features/authentication/authentication-routing.module').then((m) => m.AuthenticationRoutingModule),
  },
  {
    path: "shop",
    loadChildren: () =>
    import ('./features/shop/shop-routing.module').then((m) => m.ShopRoutingModule), canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
