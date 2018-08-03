import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, ResponseOptions, ResponseType } from '@angular/http';
import { Observable, of } from 'rxjs';
import {ConfigService} from './config.service';
import {map, catchError} from 'rxjs/operators';
import { Todo } from '../models/Todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  baseUri:string;

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseUri = configService.getApiURI();
   }

  getTodos(listId: string) : Observable<Todo[]>{

    let url = this.baseUri+`/todo/${listId}`;
    let authToken = localStorage.getItem('auth_token');

    return this.http.get<Todo[]>(url,
      {
        headers:new HttpHeaders(
          { 'Content-Type': 'application/json'
          , 'Authorization': `Bearer ${authToken}` }
        )
      }
    )
  }

  addTodo(todo: Todo) : Observable<boolean>{
    let url = this.baseUri+'/todo/AddTodo';
    let authToken = localStorage.getItem('auth_token');

    let body = JSON.stringify(todo);

    return this.http.post(url,body,{
      responseType:"text",
      headers:new HttpHeaders(
        { 'Content-Type': 'application/json'
        , 'Authorization': `Bearer ${authToken}` }
      )
    }).pipe(
      map(result=>{
        return true;
      })
    )
  }

}
