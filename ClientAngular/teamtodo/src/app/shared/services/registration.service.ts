import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, ResponseOptions, ResponseType } from '@angular/http';
import { Observable, of } from 'rxjs';
import {UserRegistration} from '../models/userregistration';
import {ConfigService} from './config.service';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient, private configService : ConfigService) {
    this.baseUri = configService.getApiURI();
   }

  private registrationUri = "/account/registration";
  private baseUri;

  register(email: string, username:string, password: string) : Observable<any> {
    let body = JSON.stringify({username,password,email});
    
    let url = this.baseUri + this.registrationUri;

    return this.http.post(url,body,
      {
        responseType:"text",
        headers:new HttpHeaders({ 'Content-Type': 'application/json' })
      }
    );
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
    //  this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
    return of(result as T);
    };
  }

  ngOnit(){}
}