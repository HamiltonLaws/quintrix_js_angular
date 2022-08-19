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

  constructor() { }
}
