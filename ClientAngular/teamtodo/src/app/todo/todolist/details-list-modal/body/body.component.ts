import { Component, OnInit, Input } from '@angular/core';
import { TodolistComponent } from '../../todolist.component';
import { DetailsListModalComponent } from '../details-list-modal.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  @Input() Modal: DetailsListModalComponent;
  

  constructor() { }

  ngOnInit() {
  }

}
