import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';
import { Todo } from '../models/Todo';
import { authorizationHeaders } from '../request-options-helper';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient, private configService: ConfigService) {
    this.baseUrl = configService.getApiURI();
  }

  private baseUrl;
  private addTodoUrl = '/todo/AddTodo';
  private completeTodoUrl = '/todo/CompleteTodo';

  getTodos(listId: string): Observable<Todo[]> {
    let url = this.baseUrl + `/todo/${listId}`;

    return this.http.get<Todo[]>(url, { headers: authorizationHeaders() });
  }

  addTodo(todo: Todo): Observable<Todo> {
    let url = this.baseUrl + this.addTodoUrl;
    let body = JSON.stringify(todo);

    return this.http.post<Todo>(url, body, { headers: authorizationHeaders() });
  }

  deleteTodo(id: string): Observable<boolean> {
    let url = this.baseUrl + `/todo/${id}`;

    return this.http.delete(url, {
      responseType: "text",
      headers: authorizationHeaders()
    }).pipe(
      map(result => {
        return true;
      })
    )
  }

  completeTodo(id: string): Observable<boolean> {
    let url = this.baseUrl + this.completeTodoUrl;

    return this.http.post(url, id, {
      responseType: "text",
      headers: authorizationHeaders()
    }).pipe(
      map(result => {
        return true;
      })
    )
  }


}
