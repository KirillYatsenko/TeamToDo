import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationFormComponent} from './account/registration-form/registration-form.component';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { TodoComponent } from './todo/todo/todo.component';
import {AuthGuard} from './shared/guards/AuthGuard';
import { TodolistComponent } from './todo/todolist/todolist.component';
import { InvitationComponent } from './todo/todolist/invitation/invitation.component';

const routes: Routes = [
  { path: '', redirectTo: '/todolists', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'todolists', component: TodolistComponent, canActivate: [AuthGuard]},
  { path: 'todo', component: TodoComponent,canActivate: [AuthGuard] },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'login', component: LoginFormComponent},
  { path: 'invitation', component: InvitationComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
