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

  constructor(private accountService: AccountService,
    private todoListService: TodolistService,
    private invitationService: InvitationService,
    private todoService: TodoService,
    private changeDetector: ChangeDetectorRef) { }

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

  importantTodos: Todo[] = [];
  todos: Todo[] = [];
  doneTodos: Todo[];
  todoDeletionRequet: boolean = false;
  unreadDoneTodos: boolean = false;

  ngOnInit() {

  }

  setData() {
    this.todo = new Todo();
    this.loadTodos();
    this.loadDropdownMembers();
    this.selectCurrentUser();
  }

  loadTodos() {
    this.todoService.getTodos(this.listComponent.selectedList.id)
      .subscribe(result => {
        this.listComponent.selectedList.todos = result;
        this.importantTodos = result.filter(x => !x.completedBy && x.important);
        this.todos = result.filter(x => !x.completedBy && !x.important);
        this.doneTodos = result.filter(x => x.completedBy);
      })
  }

  loadDropdownMembers() {
    let cloned = this.listComponent.selectedList.members.map(x => Object.assign({}, x));
    let clonedCurrentUser = this.listComponent.selectedList.members.findIndex(x => x.id == this.currentUser.id);
    cloned.splice(clonedCurrentUser, 1);

    this.dropdownMembers = cloned;
  }

  selectAllMembers() {
    this.selectedMember = null;
    $(`#${this.MEMBER_DROPDOWN_ID}`).html("All");
  }

  selectCurrentUser() {
    this.selectedMember = this.currentUser;
    $(`#${this.MEMBER_DROPDOWN_ID}`).html("Me");
  }

  selectMember(member: TodoUser) {
    this.selectedMember = member;
    $(`#${this.MEMBER_DROPDOWN_ID}`).html(this.selectedMember.userName);
  }

  addMember(id: string) {
    this.invitationService.generateInvitationLink(id)
      .subscribe(
        result => {
          this.invitationLink = result;
        },
        errors => {
          this.errors = errors;
        }
      )

    $(`#${this.MODAL_ID}`).modal("hide");
    $(`#${this.INVITATION_MODAL_ID}`).modal("show");
  }

  addTodo() {

    if (!this.todo.text || this.todo.text.length == 0) {
      return;
    }

    if (this.selectedMember) {
      this.todo.assigneeId = this.selectedMember.id;
    }
    this.todo.listId = this.listComponent.selectedList.id;

    this.todoService.addTodo(this.todo)
      .subscribe(
        result => {
          this.addTodoToModel(result);
        }
      );
  }

  deleteTodo(todo: Todo) {
    this.todoDeletionRequet = true;

    this.todoService.deleteTodo(todo.id)
      .subscribe(
        result => {

          if (result) {
            this.deleteTodoFromModel(todo);
          }

          this.todoDeletionRequet = false;
          this.listComponent.selectedList.todosCount -= 1;
        }
      );
  }

  finishTodo(id: string) {

    if (this.todoDeletionRequet) {
      return;
    }

    if (this.doneTodos.find(x => x.id == id)) {
      return;
    }

    this.todoService.completeTodo(id)
      .subscribe(result => {

        if (result) {
          this.updateTodoFinished(id);
        }

      })
  }

  leaveGroup(id: string) {
    this.todoListService.leaveGroup(id)
      .subscribe(
        result => {
          if (result) {
            $(`#${this.MODAL_ID}`).modal("hide");
            this.listComponent.removeListFromModel(id);
          }
        }
      )
  }

  private deleteTodoFromModel(todo: Todo) {
    let todos = this.todos;

    if (todo.important) {
      todos = this.importantTodos;
    }

    todos.splice(
      todos.findIndex(x => x.id == todo.id), 1
    )
  }

  private addTodoToModel(todo: Todo) {
    if (todo.important) {
      this.importantTodos.push(todo);
    } else {
      this.todos.push(todo);
    }

    this.todo = new Todo();
    this.listComponent.selectedList.todosCount += 1;
  }

  private updateTodoFinished(id: string) {
    let todos: Todo[];
    todos = this.todos;

    let index = todos.findIndex(x => x.id == id)
    if (index == -1) {
      todos = this.importantTodos;
      index = todos.findIndex(x => x.id == id)
    }

    todos[index].completedBy = this.currentUser;

    this.doneTodos.push(
      todos[index]
    )

    todos.splice(index, 1);

    this.unreadDoneTodos = true;
    this.listComponent.selectedList.todosCount -= 1;
  }






}
