import { Customer, CustomerService } from './../customer/customer.service';
import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  loggedIn = this.LoginService.getLogin();


  newCustomerForm!: FormGroup;

  newCustomer:Customer={id:0,firstName:'',lastName:'',address:'',city:'',orderTotal:0};


  addCustomer(){
    this.newCustomer.id = this.CustomerService.getId();
    this.CustomerService.updateIdCount();
    this.newCustomer.firstName=this.newCustomerForm.controls['firstName'].value,
    this.newCustomer.lastName=this.newCustomerForm.controls['lastName'].value,
    this.newCustomer.address=this.newCustomerForm.controls['address'].value,
    this.newCustomer.city = this.newCustomerForm.controls['city'].value,
    console.log(this.newCustomer);
    this.CustomerService.postCustomer(this.newCustomer);
  }


  constructor(private LoginService:LoginService,private fb :FormBuilder,private CustomerService:CustomerService) {
    //this.loggedIn = this.LoginService.getLogin();
  }

  ngOnInit(): void {
    this.newCustomerForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required]
    })
  }

}
