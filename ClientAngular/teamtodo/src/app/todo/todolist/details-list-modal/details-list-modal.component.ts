import { Component, OnInit, Input } from '@angular/core';
import { TodoList } from '../../../shared/models/TodoList';
import { TodolistComponent } from '../todolist.component';
import { AccountService } from '../../../shared/services/account.service';
import { TodoUser } from '../../../shared/models/TodoUser';
import { TodolistService } from '../../../shared/services/todolist.service';
import { InvitationService } from '../../../shared/services/invitation.service';
declare var $: any;

@Component({
  selector: 'app-details-list-modal',
  templateUrl: './details-list-modal.component.html',
  styleUrls: ['./details-list-modal.component.css']
})
export class DetailsListModalComponent implements OnInit {

  constructor(private accountService : AccountService,
              private todoListService: TodolistService,
              private invitationService: InvitationService){}

  @Input() todoList: TodoList = new TodoList();
  @Input() listComponent: TodolistComponent;
  @Input() currentUser: TodoUser;
  
  invitationLink: string;
  errors: string;

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

    $("#modal-details").modal("hide");
    $("#modal-invitation-link").modal("show");
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

  members: TodoUser[] = [];

  fetchMembers(){

    if(this.listComponent.membersFetched){
      return;
    }

    this.members = [];
    this.currentUser.userName = "Me";

    this.members.push(this.currentUser);

    let currentUserIndex = this.todoList.members.findIndex(x=>x.id == this.currentUser.id);
    let cloned = this.todoList.members.map(x => Object.assign({}, x));
    delete cloned[currentUserIndex];

    this.members = this.members.concat(cloned);

    this.listComponent.membersFetched = true;
  }

  importantSelect(){
    this.listComponent.importantSelected = ! this.listComponent.importantSelected;
  }

  memberSelected(member: TodoUser){
    this.listComponent.selectedMember = member;
    $("#member-dropdown").html(this.listComponent.selectedMember.userName);
  }

  selectAllMembers(){
    $("#member-dropdown").html("All");
  }

  ngOnInit() {
  }

}
