import { Component, OnInit, Input } from '@angular/core';
import { TodolistComponent } from '../../../todolist.component';
import { DetailsListModalComponent } from '../../details-list-modal.component';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {

  @Input() Modal: DetailsListModalComponent;

  constructor() { }

  ngOnInit() {
  }
  
  changeImportant(){
    this.Modal.todo.important=!this.Modal.todo.important;
  }

}
