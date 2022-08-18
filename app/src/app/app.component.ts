import { HttpService } from './http.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My App';


  newDate = new Date();

  constructor (private HttpService:HttpService) {

  }
  handleEventHttp(){
    this.HttpService.getRequest('https://jsonplaceholder.typicode.com/todos/1')
  }


  handleEvent(event:any){
    console.log(event);
  }
}
