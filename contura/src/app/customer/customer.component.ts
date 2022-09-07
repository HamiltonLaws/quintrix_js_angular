import { Customer, CustomerService } from './customer.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})

export class CustomerComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false})
  set paginator(value: MatPaginator) {
    if (this.customers){
      this.customers.paginator = value;
    }
  }
  columnsToDisplay = ['id','firstName','lastName','address','city','orderTotal'];

  customers = new MatTableDataSource<Customer>(this.CustomerService.getCustomer());

  applyFilter(event :Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.customers.filter = filterValue.trim().toLowerCase();
  }

  constructor(private CustomerService:CustomerService) {}




  ngOnInit(): void {
    this.customers.paginator = this.paginator

  }



}
