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
  todoListDeleteRequestProcessing: boolean = false;

  constructor( private todolistService: TodolistService,  
    private activatedRoute: ActivatedRoute,
    private accountService: AccountService){}

  ngOnInit() {

    let self = this;
    $('#confirmationDialog').on('hide.bs.modal', function (e) {
      self.todoListDeleteRequestProcessing = false;
    })

    $('body').tooltip({
      selector: '[data-toggle=tooltip]'
     });

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
      this.TodoLists = result.sort((x,y)=>{
          if(x.created<y.created){
            return 1;
          }
          if(x.created>y.created){
            return -1;
          }
          if(x.created == y.created){
            return 0;
          }
      });

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

    if(!title || title.length==0){
      return;
    }

    this.todolistService.addList(title)
      .subscribe(result=> {
        this.TodoLists.unshift(result);
        this.selectList(result.id);
        $("#modal-details").modal("show");
      },errors=>{
        this.errors = errors;
      });
  }


  selectList(id: string){
    if(this.todoListDeleteRequestProcessing){
      return;
    }
      this.selectedList = this.TodoLists.find(x=>x.id ==id);
  }

  deleteListRequest(id: string){
    this.todoListDeleteRequestProcessing = true;
    this.todoListDeleteRequest = this.TodoLists.find(x=>x.id == id);
  }

  confirmDeletion(id: string){
    this.todolistService.deleteList(id)
    .subscribe(result=> {
      if(result){
       this.deleteFromModel(id);
       this.todoListDeleteRequestProcessing = false;
      }
    },errors=>{
      this.errors = errors;
    });
  }

  deleteFromModel(id:string){
      let index = this.TodoLists.findIndex(x=>x.id == id);
      this.TodoLists.splice(index,1);
  }

  openTodolist(id: string){
    if(this.todoListDeleteRequestProcessing){
      return;
    }

    this.selectList(id);
    this.detailsComponent.setData();
    this.openDetailsDialog();
  }

  openDetailsDialog(){
    $('#modal-details').modal('show');
  }

}
