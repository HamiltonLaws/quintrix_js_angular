import { Customer, CustomerService } from './customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  columnsToDisplay = ['id','firstName','lastName','address','city','orderTotal'];

  data: Customer[] = [];

  constructor(private CustomerService:CustomerService) { }

  ngOnInit(): void {
    this.data = this.CustomerService.getCustomer();
    console.log(this.data)
  }

}
