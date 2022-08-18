import { User, UserService } from './user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { __values } from 'tslib';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  errormessage:any;
  data: User[]=[];
  newUser = {} as User;
  public userForm:FormGroup;

  columnsToDisplay = ['id','name','phone','email','active']

  @Input() //user :User;

  @Output() userEvent= new EventEmitter<User>();

  constructor(private UserService:UserService,private formBilder:FormBuilder) {
    this.userForm = this.formBilder.group({
      id:0,name:'',phone:'',email:'',active:false

    })
    this.onGet();
  }

  onGet(){
    this.UserService.getUsers().subscribe(x =>{
      this.data = x;
      console.log(this.data);
    },(error)=>{
      this.errormessage = error;
      //console.log(error);
    });

  }

  onPost(){
    this.newUser.id=this.userForm.get('id')?.value;
    this.newUser.name=this.userForm.get('name')?.value;
    this.newUser.phone=this.userForm.get('phone')?.value;
    this.newUser.email=this.userForm.get('email')?.value;
    this.newUser.active=this.userForm.get('active')?.value;
    console.log(this.newUser);
    this.UserService.postUsers(this.newUser).subscribe(user =>this.data.push(user)
    ,(error)=>{
      this.errormessage = error;
    })
  }

  ngOnInit(): void {
  }

  sendUserEvent():void{
    //this.userEvent.emit(this.user);
  }
}
