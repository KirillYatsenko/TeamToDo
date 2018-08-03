import { Component, OnInit, Input, NgZone, ChangeDetectorRef } from '@angular/core';
import { TodoList } from '../../../shared/models/TodoList';
import { TodolistComponent } from '../todolist.component';
import { AccountService } from '../../../shared/services/account.service';
import { TodoUser } from '../../../shared/models/TodoUser';
import { TodolistService } from '../../../shared/services/todolist.service';
import { InvitationService } from '../../../shared/services/invitation.service';
import { TodoService } from '../../../shared/services/todo.service';
import { Todo } from '../../../shared/models/Todo';
declare var $: any;

@Component({
  selector: 'app-details-list-modal',
  templateUrl: './details-list-modal.component.html',
  styleUrls: ['./details-list-modal.component.css']
})
export class DetailsListModalComponent implements OnInit {

  constructor(private accountService : AccountService,
              private todoListService: TodolistService,
              private invitationService: InvitationService,
              private todoService: TodoService,
              private changeDetector: ChangeDetectorRef){}

  @Input() listComponent: TodolistComponent;
  @Input() currentUser: TodoUser;
  
  private MODAL_ID = "modal-details";
  private MEMBER_DROPDOWN_ID = "member-dropdown";
  private INVITATION_MODAL_ID = "modal-invitation-link";

  invitationLink: string;
  errors: string;
  dropdownMembers: TodoUser[] = [];
  selectedMember: TodoUser;
  todo: Todo = new Todo();

  todos: Todo[];
  doneTodos: Todo[];

  ngOnInit() {

  }

  setData(){
      this.todo = new Todo();
      this.loadTodos();
      this.loadDropdownMembers();
      this.selectCurrentUser();
  }

   loadTodos(){
      this.todoService.getTodos(this.listComponent.selectedList.id)
        .subscribe(result=>{
          this.listComponent.selectedList.todos = result;
          this.todos = result.filter(x=>x.completed == false);
          this.doneTodos = result.filter(x=>x.completed == true);
        })
   }

   loadDropdownMembers(){
    let cloned = this.listComponent.selectedList.members.map(x => Object.assign({}, x));
    let clonedCurrentUser = this.listComponent.selectedList.members.findIndex(x=>x.id == this.currentUser.id);
    cloned.splice(clonedCurrentUser,1);

    this.dropdownMembers = cloned;
  }

  selectAllMembers(){
    this.selectedMember = null;
    $(`#${this.MEMBER_DROPDOWN_ID}`).html("All");
  }

  selectCurrentUser(){
    this.selectedMember = this.currentUser;
    $(`#${this.MEMBER_DROPDOWN_ID}`).html("Me");
  }

  selectMember(member: TodoUser){
    this.selectedMember = member;
    $(`#${this.MEMBER_DROPDOWN_ID}`).html(this.selectedMember.userName);
  }

  addMember(id: string){
    this.invitationService.generateInvitationLink(id)
      .subscribe(
        result => {
          this.invitationLink = result;
        },
        errors=>{
          this.errors = errors;
        }
      )

    $(`#${this.MODAL_ID}`).modal("hide");
    $(`#${this.INVITATION_MODAL_ID}`).modal("show");
   }

   addTodo(){
      if(this.selectedMember){
        this.todo.assigneeId = this.selectedMember.id;
      }
      this.todo.listId = this.listComponent.selectedList.id;

      this.todoService.addTodo(this.todo)
        .subscribe(
          result=>{
            this.todos.push(result  );
            this.todo=new Todo();
          }
        )
   }

   finishTodo(id: string){

    if(this.doneTodos.find(x=>x.id == id)){
      return;
    }

     this.todoService.completeTodo(id)
       .subscribe(result=>{

         if(result){
           let index = this.todos.findIndex(x=>x.id == id)
           this.todos[index].completed = true;

           this.doneTodos.push(
              this.todos[index]
           )

           this.todos.splice(index,1);
         }

       })
   }

  leaveGroup(id: string){
    this.todoListService.leaveGroup(id)
      .subscribe(
        result=>{
          if(result){
           $("#modal-details").modal("hide");
            this.listComponent.deleteFromModel(id);
          }
        }
      )
  }

  

  


}
