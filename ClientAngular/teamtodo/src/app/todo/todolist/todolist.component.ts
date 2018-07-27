import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../../shared/services/todolist.service';
import { TodoList } from '../../shared/models/TodoList';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  TodoLists: TodoList[] = [];
  errors: string;

  constructor( private todolistService: TodolistService) { }

  ngOnInit() {
    this.loadLists();
  }

  loadLists(){
    this.todolistService.getLists()
    .subscribe(result=>{
      this.TodoLists = result;
    },
    errors=>{
      this.errors = errors;
    });
  }

  addList(title: string){
    this.todolistService.addList(title)
      .subscribe(result=> {
        if(result){
          this.loadLists();
        }
      },errors=>{
        this.errors = errors;
      });
  }

}
