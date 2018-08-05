import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Subscription } from '../../../../node_modules/rxjs';
import {Observable} from 'rxjs';    

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user: AccountService,private router: Router) {}

  private subscription: Subscription;

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  
    let tokenValidation = await this.user.validateToken();

    if(!this.user.isLoggedIn() || !tokenValidation)
    {
      let url = state.url;
      this.router.navigate(['/login'],{queryParams: {redirectingUrl:url}});                         
       return false;
    }

    return true;
  }
}