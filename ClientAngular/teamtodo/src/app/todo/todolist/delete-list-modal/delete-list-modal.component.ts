import { Component, OnInit,Input } from '@angular/core';
import { TodoList } from '../../../shared/models/TodoList';
import { TodolistComponent } from '../todolist.component';

@Component({
  selector: 'app-delete-list-modal',
  templateUrl: './delete-list-modal.component.html',
  styleUrls: ['./delete-list-modal.component.css']
})


export class DeleteListModalComponent implements OnInit {

  constructor() { }

  @Input() todoList: TodoList = new TodoList();
  @Input() deleteComponent: TodolistComponent;

  ngOnInit() {
  }

  confirmDeletion(id: string){
    this.deleteComponent.confirmDeletion(id);
  }

}
