import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from '../../../shared/models/TodoList';
import { TodolistComponent } from '../todolist.component';

@Component({
  selector: 'app-details-list-modal',
  templateUrl: './details-list-modal.component.html',
  styleUrls: ['./details-list-modal.component.css']
})
export class DetailsListModalComponent implements OnInit {

  constructor() {

   }

  @Input() todoList: TodoList = new TodoList();
  @Input() invited: boolean;
  @Input() listComponent: TodolistComponent;
  

  addMember(id: string){

  }

  ngOnInit() {
    
  }

}
