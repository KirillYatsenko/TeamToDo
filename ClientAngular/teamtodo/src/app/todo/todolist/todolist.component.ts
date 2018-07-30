import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../../shared/services/todolist.service';
import { TodoList } from '../../shared/models/TodoList';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
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
  invited: boolean;

  constructor( private todolistService: TodolistService,  private activatedRoute: ActivatedRoute){}

  ngOnInit() {

    this.loadLists();
    this.this = this;

    this.subscription = this.activatedRoute.queryParams.subscribe(
      (param: any)=>{
          this.open = param['open'];
          this.invited = param['invited'];
      }
    );

    if(this.open){
      this.selectList(this.open);
      $("#modal-details").modal("show");
    }
  }

  loadLists(){
    this.todolistService.getLists()
    .subscribe(result=>{
      this.TodoLists = result;
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
    if(this.invited){
      this.todolistService.getList(id)
        .subscribe(
          result=>{
            this.this.selectedList = result;
          },
          errors => {
            this.errors = errors;
          }
        )
    }else{
      this.selectedList = this.TodoLists.find(x=>x.id ==id);
    }
  }

  todoListDeleteRequest: TodoList = new TodoList();

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

  acceptInvitation(id: string){
    this.todolistService.acceptInvitation(id)
      .subscribe(
        result=>{
          if(result){
            this.invited = false;
            //Accepted
          }
        }
      )
  }

  openDetailsModal(id: string){

  }

}
