import { Injectable } from '@angular/core';

export interface Item{
  id:number;
  name:string;
  price:number;
}

export interface Order{
  customerId:number;
  listItems:Item[];
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
}
