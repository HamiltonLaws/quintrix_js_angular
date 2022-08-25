import { Customer, CustomerService } from './../customer/customer.service';
import { Order, OrdersService, Item } from './orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders :Order[]=[];

  items : Item[]=[];

  customers : Customer[]=[];

  constructor(private OrdersService:OrdersService,private CustomerService:CustomerService) {
   }

  ngOnInit(): void {
    this.orders = this.OrdersService.getOrdrer();
    this.items = this.OrdersService.getItem();
    this.customers = this.CustomerService.getCustomer();
    console.log(this.customers)
  }

}
