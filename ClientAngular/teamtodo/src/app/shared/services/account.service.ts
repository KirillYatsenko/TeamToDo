import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConfigService} from './config.service';
import {map} from 'rxjs/operators';
import { TodoUser } from '../models/TodoUser';
import {bareHeaders, authorizationHeaders,responseTextAuthorizationOptions,responseTextOptions } from '../request-options-helper';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private configService : ConfigService) {
    this.baseUrl = configService.getApiURI();
   }

   ngOnit(){ }

  private baseUrl;
  private registrationUrl = "/account/registration";
  private loginUrl = "/account/login";
  private validateUrl = "/account/ValidateToken";
  private getUser = '/account/GetCurrentUser';

  register(email: string, username:string, password: string) : Observable<any> {
    let body = JSON.stringify({username,password,email});
    let url = this.baseUrl + this.registrationUrl;
    let options = responseTextOptions();

    return this.http.post(url,body,responseTextOptions());
  }

  login(email:string, password: string) : Observable<any>{
    let body = JSON.stringify({email,password});
    let url = this.baseUrl + this.loginUrl;

    return this.http.post(url,body,
     {
      responseType:"text",
      headers:bareHeaders()
    }).pipe(
      map(result => {
        let token = JSON.parse(result).token;
        localStorage.setItem('auth_token',token);
        return true;
      })
    )
  }

  isLoggedIn() : boolean{
    return !!localStorage.getItem('auth_token');
  }

  async validateToken(){
    let url = this.baseUrl + this.validateUrl;

    return await this.http.get(url,responseTextAuthorizationOptions()).toPromise().catch(x=>{
        return false;
    })
    
  }

  getCurrentUser() : Observable<TodoUser>{
    let url = this.baseUrl + this.getUser;
    
    return this.http.get<TodoUser>(url,{
      headers: authorizationHeaders()
    });
  }

 
}