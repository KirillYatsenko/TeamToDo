import { Component, OnInit, Input } from '@angular/core';
import { TodolistComponent } from '../todolist.component';
import { TodolistService } from '../../../shared/services/todolist.service';
declare var $: any;

@Component({
  selector: 'app-addlist-form',
  templateUrl: './addlist-form.component.html',
  styleUrls: ['./addlist-form.component.css']
})

export class AddlistFormComponent implements OnInit {

  constructor(private todoListService: TodolistService) { }

  ngOnInit() {
  }

  @Input() listComponent: TodolistComponent;

  addList(title: string) {

    if (!title || title.length == 0) {
      return;
    }

    this.todoListService.addList(title)
      .subscribe(result => {
        this.listComponent.TodoLists.unshift(result);
        this.listComponent.selectList(result.id);
        $(`#${this.listComponent.DETAILS_DIALOG_ID}`).modal("show");
      }, errors => {
        this.listComponent.errors = errors;
      });
  }

  
}
