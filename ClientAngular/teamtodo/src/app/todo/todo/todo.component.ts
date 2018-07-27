import { Component, OnInit } from '@angular/core';
import { Todo } from '../../shared/models/Todo';
import { TodoService } from '../../shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  Todos: Todo[] = [];
  erros: string;

  constructor(private todoService: TodoService) { }
  
  ngOnInit() {
      this.todoService.getTodos().subscribe(
        result=>{
            this.Todos = result;
        },
        erros=>{
          
        }
      );
  }

}
