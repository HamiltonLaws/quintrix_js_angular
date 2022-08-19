import { UserService } from './user/user.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentComponent } from './agent/agent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatTableModule } from "@angular/material/table";
import { AgentService } from './agent/agent.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AgentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  providers: [AgentService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
