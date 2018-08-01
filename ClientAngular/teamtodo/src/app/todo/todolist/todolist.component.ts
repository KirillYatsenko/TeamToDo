import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../../shared/services/todolist.service';
import { TodoList } from '../../shared/models/TodoList';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../shared/services/account.service';
import { TodoUser } from '../../shared/models/TodoUser';
declare var $: any;


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  private subscription: Subscription;

  TodoLists: TodoList[] = [];
  this: TodolistComponent;
  errors: string;

  open: string;

  currentUser: TodoUser;

  constructor( private todolistService: TodolistService,  
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService){}

  ngOnInit() {

    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any)=>{
          this.open = param['open'];
      }
    );

    this.loadLists();
    this.this = this;

    this.loadCurrentUser();
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

  selectedList: TodoList = new TodoList();

  selectList(id: string){
      this.selectedList = this.TodoLists.find(x=>x.id ==id);
  }

  todoListDeleteRequest: TodoList = new TodoList();
  erros: string;

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
