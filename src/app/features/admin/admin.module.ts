import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { ShopsComponent } from './sections/shops/shops.component';
import { UsersComponent } from './sections/users/users.component';
import { DashboardComponent } from './sections/dashboard/dashboard.component';
import { NewShopComponent } from './sections/shops/components/new-shop/new-shop.component';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    ShopsComponent,
    UsersComponent,
    DashboardComponent,
    NewShopComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
export class AdminModule { }
