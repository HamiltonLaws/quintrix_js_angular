import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface UserInterface{
  name:string;
  age:string;
  id:number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user :UserInterface;

  @Output() userEvent= new EventEmitter<UserInterface>();

  constructor() {
    this.user = {} as UserInterface;
  }

  ngOnInit(): void {
  }

  sendUserEvent():void{
    this.userEvent.emit(this.user);
  }
}
