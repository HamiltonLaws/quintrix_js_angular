import { AgentService,Agent } from './agent.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  errormessage:any;

  data: Agent[]=[];
  columnsToDisplay = ['id','name','email','gender','status']

  handleAgentHttp(){
    this.AgentService.getAgents().subscribe((response)=>{
      console.log(response)
    })
  }

  constructor(private AgentService:AgentService) {
    this.AgentService.getAgents().subscribe(x =>{
      this.data = x;
      console.log(this.data);
    },(error)=>{
      this.errormessage = error;
      //console.log(error);
    })
   }

  ngOnInit(): void {

  }

}
