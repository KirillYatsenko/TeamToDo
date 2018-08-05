import { TodoUser } from "./TodoUser";

export class Todo{
    id: string;
    creatorId:string;
    assigneeId: string;
    text:string;
    important: boolean = false;
    listId:string;
    completedBy: TodoUser;
    creator: TodoUser;
    assignee: TodoUser;
    showChecked: boolean = false;
}