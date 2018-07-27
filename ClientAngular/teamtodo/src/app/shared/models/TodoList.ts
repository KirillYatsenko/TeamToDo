import { TodoUser } from "./TodoUser";
import { Todo } from "./Todo";

export class TodoList{
      id : string = "";
      title: string = "";
      created: string = "";
      admin: TodoUser = new TodoUser();
      todos: Todo[] = [];
      members: TodoUser[] = [];
}