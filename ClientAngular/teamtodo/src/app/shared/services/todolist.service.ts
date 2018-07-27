import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, ResponseOptions, ResponseType } from '@angular/http';
import { Observable, of } from 'rxjs';
import {ConfigService} from './config.service';
import {map, catchError} from 'rxjs/operators';
import { Todo } from '../models/Todo';
import { TodoList } from '../models/TodoList';
import { Body } from '../../../../node_modules/@angular/http/src/body';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  baseUri:string;

  options = {
    headers:new HttpHeaders(
     { 'Content-Type': 'application/json'
      , 'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
     }
    )
  }

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseUri = configService.getApiURI();
   }

  getLists() : Observable<TodoList[]>{
    let url = this.baseUri+'/todolist';

    return this.http.get<TodoList[]>(url,this.options);
  }

  addList(title: string) : Observable<any>{
     let url = this.baseUri+'/todolist';

    return this.http.post(url,`"${title}"`,{
      responseType:"text",
      headers:new HttpHeaders(
       { 'Content-Type': 'application/json'
        , 'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
       }
      )
    } )
      .pipe(
        map(result=>{
          return true;
        })
      );
  }

}
