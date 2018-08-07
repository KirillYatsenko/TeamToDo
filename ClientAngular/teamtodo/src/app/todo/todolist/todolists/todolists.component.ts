import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from '../../../shared/models/TodoList';
import { TodolistComponent } from '../todolist.component';

@Component({
  selector: 'app-todolists',
  templateUrl: './todolists.component.html',
  styleUrls: ['./todolists.component.css']
})
export class TodolistsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() listComponent: TodolistComponent;
  @Input() Todolists: TodoList[];

  openTodolist(id: string){
    this.listComponent.openTodolist(id);
  }

  deleteListRequest(id: string){
    this.listComponent.deleteListRequest(id);
  }

}
