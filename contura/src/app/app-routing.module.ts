import { AddCustomerComponent } from './add-customer/add-customer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'customer',component:CustomerComponent},
  {path:'orders',component:OrdersComponent},
  {path:'about',component:AboutComponent},
  {path:'login',component:LoginComponent},
  {path:'addCustomer',component:AddCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
