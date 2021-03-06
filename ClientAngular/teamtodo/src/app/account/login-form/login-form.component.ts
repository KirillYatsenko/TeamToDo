import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {Credentials} from '../../shared/models/Credentials';
import { AccountService } from '../../shared/services/account.service';
import { finalize } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private subscription: Subscription;

   brandNew: boolean;
   errors: string;
   isRequesting: boolean;
   submitted: boolean = false;
   credentials: Credentials = {email: '', password: ''};
   redirectingUrl:string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any)=>{
          this.brandNew = param['brandNew'];
          this.credentials.email = param['email'];
          this.redirectingUrl = param['redirectingUrl'];
      }
    );

    let self = this;
    $(document).keypress(function(e) {
      if(e.which == 13) {
          self.login();
      }
  });

  }
  
  login(){
    this.accountService.login(this.credentials.email,this.credentials.password).pipe(
      finalize(()=>this.isRequesting = false)
    )
      .subscribe(result=>
      {
        if(result){
            if(this.redirectingUrl){
              window.location.href =this.redirectingUrl;
            }else{
              this.router.navigate(['/todolists'])
            }
        } 
      },
    
      errors => {
                this.errors = errors["error"];
                this.brandNew = false;
    })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
