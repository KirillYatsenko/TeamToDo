import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TodolistService } from '../../shared/services/todolist.service';
import { TodoList } from '../../shared/models/TodoList';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../shared/services/account.service';
import { TodoUser } from '../../shared/models/TodoUser';
import { DetailsListModalComponent } from './details-list-modal/details-list-modal.component';
declare var $: any;

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent implements AfterViewInit {

  constructor(private todolistService: TodolistService,
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService) { }

  private subscription: Subscription;

  @ViewChild(DetailsListModalComponent)
  private detailsComponent: DetailsListModalComponent;

  private openQueryParam: string;

  CONFIRMATION_DIALOG_ID = "confirmation-dialog";
  DETAILS_DIALOG_ID = "modal-details";

  TodoLists: TodoList[];
  currentUser: TodoUser;
  selectedList: TodoList;

  errors: string;
  todoListDeleteRequest: TodoList = new TodoList();
  todoListDeleteRequestProcessing: boolean = false;


  ngOnInit() {

    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any) => {
        this.openQueryParam = param['open'];
      }
    );

    this.loadLists();
    this.loadCurrentUser();
  }

  ngAfterViewInit() {
    this.defineJqueryEvents();;
  }

  loadCurrentUser() {
    this.accountService.getCurrentUser()
      .subscribe(
        result => {
          this.currentUser = result;
        },
        errors => {
          this.errors = errors;
        }
      )
  }

  loadLists() {
    this.todolistService.getLists()
      .subscribe(result => {
        this.TodoLists = result.sort((a, b) => this.listSort(a, b));

        if (this.openQueryParam) {
          this.selectList(this.openQueryParam);
          this.detailsComponent.setData();
          $(`#${this.DETAILS_DIALOG_ID}`).modal("show");
        }

      },
        errors => {
          this.errors = errors;
        });
  }

  selectList(id: string) {
    if (this.todoListDeleteRequestProcessing) {
      return;
    }
    this.selectedList = this.TodoLists.find(x => x.id == id);
  }

  openTodolist(id: string) {
    if (this.todoListDeleteRequestProcessing) {
      return;
    }

    this.selectList(id);
    this.detailsComponent.setData();
    this.openDetailsDialog();
  }

  deleteListRequest(id: string) {
    this.todoListDeleteRequestProcessing = true;
    this.todoListDeleteRequest = this.TodoLists.find(x => x.id == id);
  }

  removeListFromModel(id: string) {
    let index = this.TodoLists.findIndex(x => x.id == id);
    this.TodoLists.splice(index, 1);
  }

  private listSort(x: TodoList, y: TodoList): number {
    if (x.created < y.created) {
      return 1;
    }
    if (x.created > y.created) {
      return -1;
    }
    if (x.created == y.created) {
      return 0;
    }
  }

  private defineJqueryEvents() {

    let self = this;

    $(`#${this.DETAILS_DIALOG_ID}`).on('shown.bs.modal', function (e) {
      $('#todo-title').focus();
    })

    $(`#${this.CONFIRMATION_DIALOG_ID}`).on('hide.bs.modal', function (e) {
      self.todoListDeleteRequestProcessing = false;
    })

    $('body').tooltip({
      selector: '[data-toggle=tooltip]'
    });

    $('#todolist-title').focus();
  }

  private openDetailsDialog() {
    $(`#${this.DETAILS_DIALOG_ID}`).modal('show');
  }

}
