import { Component, OnInit,Input } from '@angular/core';
import { DetailsListModalComponent } from '../../details-list-modal.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input() Modal: DetailsListModalComponent;

  constructor() { }

  ngOnInit() {
  }

}
