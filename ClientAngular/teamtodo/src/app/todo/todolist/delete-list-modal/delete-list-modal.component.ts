import { Component, OnInit,Input } from '@angular/core';
import { TodoList } from '../../../shared/models/TodoList';
import { TodolistComponent } from '../todolist.component';
import { $ } from 'protractor';
import { TodolistService } from '../../../shared/services/todolist.service';

@Component({
  selector: 'app-delete-list-modal',
  templateUrl: './delete-list-modal.component.html',
  styleUrls: ['./delete-list-modal.component.css']
})


export class DeleteListModalComponent implements OnInit {

  constructor(private todoListService: TodolistService) { }

  @Input() todoList: TodoList = new TodoList();
  @Input() listComponent: TodolistComponent;

  ngOnInit() {
  }

  confirmDeletion(id: string) {
    this.todoListService.deleteList(id)
      .subscribe(result => {
        if (result) {
          this.listComponent.removeListFromModel(id);
          this.listComponent.todoListDeleteRequestProcessing = false;
        }
      }, errors => {
        this.listComponent.errors = errors;
      });
  }

}
