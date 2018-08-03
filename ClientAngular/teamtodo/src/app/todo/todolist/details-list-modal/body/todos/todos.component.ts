import { Component, OnInit,Input } from '@angular/core';
import { DetailsListModalComponent } from '../../details-list-modal.component';
import { Todo } from '../../../../../shared/models/Todo';
declare var $: any;

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() Todos: Todo[];
  @Input() Modal: DetailsListModalComponent;

  constructor() {
   }

  ngOnInit() {
    $('#completedby-popover').popover();
  }

}
