import { OrdersService } from './../orders/orders.service';
import { Injectable } from '@angular/core';

export interface Customer{
  id:number;
  firstName:string;
  lastName:string;
  address:string;
  city:string;
  orderTotal:number;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  idCount =4;

  customerList: Customer[] = [
    {id:1,firstName:"Hamilton",lastName:"Laws",address:"12134 Home Dr",city:"Cleveland",orderTotal:this.OrdersService.getTotal(1)},
    {id:2,firstName:"Billy",lastName:"Jones",address:"12134 David Rd",city:"Chicago",orderTotal:this.OrdersService.getTotal(2)},
    {id:3,firstName:"Jonny",lastName:"Killian",address:"1254 Killingway Dr",city:"Las Vagas",orderTotal:this.OrdersService.getTotal(3)},
  ];

  getCustomer(){
    return this.customerList;
  }

  postCustomer(c: Customer){
    console.log(c);
    this.customerList.push(c);
  }

  getId(){
    return this.idCount
  }

  updateIdCount(){
    this.idCount++;
  }

  constructor(private OrdersService:OrdersService) {

  }
}
