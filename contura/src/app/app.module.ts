import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import { CustomerService } from './customer/customer.service';
import { OrdersService } from './orders/orders.service';
import {  MatTableModule } from "@angular/material/table";
import {MatDividerModule} from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { JwPaginationModule } from 'jw-angular-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { LoginService } from './login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    OrdersComponent,
    AboutComponent,
    LoginComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatDividerModule,
    MatInputModule,
    JwPaginationModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService,OrdersService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
