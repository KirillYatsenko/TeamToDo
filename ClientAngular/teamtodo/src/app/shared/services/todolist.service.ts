import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, ResponseOptions, ResponseType } from '@angular/http';
import { Observable, of } from 'rxjs';
import { ConfigService } from './config.service';
import { map, catchError } from 'rxjs/operators';
import { Todo } from '../models/Todo';
import { TodoList } from '../models/TodoList';
import { Body } from '@angular/http/src/body';
import { UrlHandlingStrategy } from '@angular/router';
import { bareHeaders, authorizationHeaders, responseTextAuthorizationOptions, responseTextOptions } from '../request-options-helper';


@Injectable({
  providedIn: 'root'
})

export class TodolistService {

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseUrl = configService.getApiURI();
  }

  private baseUrl;

  getLists(): Observable<TodoList[]> {
    let url = this.baseUrl + '/todolist';

    return this.http.get<TodoList[]>(url, { headers: authorizationHeaders() });
  }

  getList(id: string): Observable<TodoList> {
    let url = this.baseUrl + `/todolist/${id}`;

    return this.http.get<TodoList>(url, { headers: authorizationHeaders() });
  }

  addList(title: string): Observable<TodoList> {
    let url = this.baseUrl + '/todolist';

    return this.http.post<TodoList>(url, `"${title}"`, { headers: authorizationHeaders() });
  }

  deleteList(id: string): Observable<boolean> {
    let url = this.baseUrl + `/todolist/${id}`;

    return this.http.delete(url,
      {
        responseType: "text",
        headers: authorizationHeaders()
      }).pipe(
        map(result => {
          return true;
        })
      );
  }

  leaveGroup(id: string): Observable<boolean> {
    let url = this.baseUrl + `/todolist/leavegroup/${id}`;

    return this.http.delete(url, responseTextAuthorizationOptions()
    ).pipe(
      map(x => {
        return true;
      }
      )
    );
  }




}
