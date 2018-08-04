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

  private subscription: Subscription;

  @ViewChild(DetailsListModalComponent)
  private detailsComponent: DetailsListModalComponent;

  TodoLists: TodoList[] = [];
  currentUser: TodoUser;
  selectedList: TodoList;

  errors: string;
  open: string;
  todoListDeleteRequest: TodoList = new TodoList();

  constructor( private todolistService: TodolistService,  
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService){}

  ngOnInit() {

    $('[data-toggle="tooltip"]').tooltip();

    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any)=>{
          this.open = param['open'];
      }
    );

    this.loadLists();

    this.loadCurrentUser();
  }

  ngAfterViewInit() {
    console.log('gogogo');
  }

  loadCurrentUser(){
    this.accountService.getCurrentUser()
      .subscribe(
        result=>{
          this.currentUser = result;
        },
        errors =>{
          this.errors = errors;
        }
      )
  }

  loadLists(){
    this.todolistService.getLists()
    .subscribe(result=>{
      this.TodoLists = result;

      if(this.open){
        this.selectList(this.open);
        this.detailsComponent.setData();
        $("#modal-details").modal("show");
      }

    },
    errors=>{
      this.errors = errors;
    });
  }

  addList(title: string){
    this.todolistService.addList(title)
      .subscribe(result=> {
        if(result){
          this.loadLists();
        }
      },errors=>{
        this.errors = errors;
      });
  }


  selectList(id: string){
      this.selectedList = this.TodoLists.find(x=>x.id ==id);
  }

  deleteListRequest(id: string){
    this.todoListDeleteRequest = this.TodoLists.find(x=>x.id == id);
  }

  confirmDeletion(id: string){
    this.todolistService.deleteList(id)
    .subscribe(result=> {
      if(result){
       this.deleteFromModel(id);
      }
    },errors=>{
      this.errors = errors;
    });
  }

  deleteFromModel(id:string){
      let index = this.TodoLists.findIndex(x=>x.id == id);
      this.TodoLists.splice(index,1);
  }

}
