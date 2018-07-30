import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RegistrationFormComponent} from './account/registration-form/registration-form.component';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { TodoComponent } from './todo/todo/todo.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { DeleteListModalComponent } from './todo/todolist/delete-list-modal/delete-list-modal.component';
import { DetailsListModalComponent } from './todo/todolist/details-list-modal/details-list-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    TodoComponent,
    TodolistComponent,
    DeleteListModalComponent,
    DetailsListModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
