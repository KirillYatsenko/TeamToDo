import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {RegistrationFormComponent} from './account/registration-form/registration-form.component';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { DeleteListModalComponent } from './todo/todolist/delete-list-modal/delete-list-modal.component';
import { DetailsListModalComponent } from './todo/todolist/details-list-modal/details-list-modal.component';
import { InvitationComponent } from './todo/todolist/invitation/invitation.component';
import { HeaderComponent } from './todo/todolist/details-list-modal/header/header.component';
import { BodyComponent } from './todo/todolist/details-list-modal/body/body.component';
import { AddTodoFormComponent } from './todo/todolist/details-list-modal/body/add-todo-form/add-todo-form.component';
import { TodosComponent } from './todo/todolist/details-list-modal/body/todos/todos.component';
import { TabsComponent } from './todo/todolist/details-list-modal/body/tabs/tabs.component';
import { InvitationModalComponent } from './todo/todolist/details-list-modal/invitation-modal/invitation-modal.component';
import { NavbarComponent } from './todo/todolist/navbar/navbar.component';
import { AddlistFormComponent } from './todo/todolist/addlist-form/addlist-form.component';
import { TodolistsComponent } from './todo/todolist/todolists/todolists.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    TodolistComponent,
    DeleteListModalComponent,
    DetailsListModalComponent,
    InvitationComponent,
    HeaderComponent,
    BodyComponent,
    AddTodoFormComponent,
    TodosComponent,
    TabsComponent,
    InvitationModalComponent,
    NavbarComponent,
    AddlistFormComponent,
    TodolistsComponent
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
