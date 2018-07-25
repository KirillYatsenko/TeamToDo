import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegistrationFormComponent} from './account/registration-form/registration-form.component';
import { LoginFormComponent } from './account/login-form/login-form.component';
import { TodoComponent } from './todo/todo/todo.component';
import {AuthGuard} from './shared/guards/AuthGuard';

const routes: Routes = [
  { path: '', redirectTo: '/registration', pathMatch: 'full' },
  {path: 'todo', component: TodoComponent,canActivate: [AuthGuard] },
  { path: 'registration', component: RegistrationFormComponent },
  { path: 'login', component: LoginFormComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [AuthGuard]
})

export class AppRoutingModule { }
