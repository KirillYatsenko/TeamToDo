import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

import { RegistrationService } from '../../shared/services/registration.service';
import {UserRegistration} from '../../shared/models/UserRegistration';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
  errors: string;  
  isRequesting: boolean;
  submitted: boolean = false;

  constructor(private registrationService : RegistrationService, private router : Router) { }

  user: UserRegistration = {username: "", password: "", email: ""};

  ngOnInit(){}

  registerUser() {
    let valid = true;
    this.submitted = true;
    this.isRequesting = true;
    this.errors='';
      if(valid)
      {
          this.registrationService.register(this.user.email, this.user.username,this.user.password)
          .pipe(
            finalize(()=>this.isRequesting = false)
          )
            .subscribe(
              result  => {
                if(result){
                  this.router.navigate(['/login'],{queryParams: {brandNew: true,email:this.user.password}});                         
              }},
              errors => {
                let errorResponse = errors as HttpErrorResponse;
                this.errors = errorResponse.error.description;
              })
      }      
    }
 } 

 

