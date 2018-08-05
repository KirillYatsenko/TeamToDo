import { Component, OnInit,Input } from '@angular/core';
import { TodoList } from '../../../shared/models/TodoList';
import { TodolistComponent } from '../todolist.component';
import { $ } from '../../../../../node_modules/protractor';

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
