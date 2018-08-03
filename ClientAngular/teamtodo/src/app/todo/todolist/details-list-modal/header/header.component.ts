import { Component, OnInit, Input } from '@angular/core';
import { TodoUser } from '../../../../shared/models/TodoUser';
import { TodoList } from '../../../../shared/models/TodoList';
import { DetailsListModalComponent } from '../details-list-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() Modal: DetailsListModalComponent;

  constructor() { }

  ngOnInit() {
  }
}
