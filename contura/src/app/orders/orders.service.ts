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
  total=0;

  itemList : Item [] =[
    {id:1,name:"Basketball",price:7.99},
    {id:2,name:"Shoes",price:199.99},
    {id:3,name:"Frisbee",price:2.99},
    {id:4,name:"Hat",price:5.99},
    {id:5,name:"T-Shirt",price:30.95},
    {id:6,name:"Shorts",price:40.56},
    {id:7,name:"Football",price:10.56},
    {id:8,name:"Swimming Trunks",price:50.62},
    {id:9,name:"Baseball",price:11.66},
    {id:10,name:"Vollyball",price:15.65},]

    orderList : Order [] =[
      {customerId:1,listItems:
        [this.itemList[1],this.itemList[4],this.itemList[9]]},
      {customerId:2,listItems:
        [this.itemList[6],this.itemList[9],this.itemList[7]]},
      {customerId:3,listItems:
        [this.itemList[2],this.itemList[7],this.itemList[5]]},
    ]

    getOrdrer(){
      return this.orderList
    }

    getItem(){
      return this.itemList
    }

    postOrder(o:Order){
      this.orderList.push(o);
    }

    postItem(i:Item){
      this.itemList.push(i);
    }

    getTotal(num:number){
      this.total=0;
      this.orderList.filter(x=>x.customerId == num).forEach(obj=>{
      obj.listItems.forEach(obj2=>{
        this.total+=obj2.price
        })
      });
      return this.total
    }

  constructor() { }
}
