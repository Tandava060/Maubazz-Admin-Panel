import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './features/authentication/admin-auth.guard';
import { UserAuthGuard } from './features/authentication/user-auth-guard.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
    import ('./features/authentication/authentication-routing.module').then((m) => m.AuthenticationRoutingModule),
  },
  {
    path: "shop",
    loadChildren: () =>
    import ('./features/shop/shop-routing.module').then((m) => m.ShopRoutingModule), canActivate: [AdminAuthGuard],
  },
  {
    path: "admin",
    loadChildren: () =>
    import ('./features/admin/admin-routing.module').then((m) => m.AdminRoutingModule), canActivate: [AdminAuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
