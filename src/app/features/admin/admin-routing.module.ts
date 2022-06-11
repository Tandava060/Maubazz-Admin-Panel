import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { ShopsComponent } from './sections/shops/shops.component';
import { UsersComponent } from './sections/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
     },
     {
      path: 'shops',
      component: ShopsComponent
   },
   {
    path: 'users',
    component: UsersComponent
 },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
