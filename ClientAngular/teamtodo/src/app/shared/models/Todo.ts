import { TodoUser } from "./TodoUser";

export class Todo{
    id: string;
    creatorId:string;
    assigneeId: string;
    completed: boolean;
    text:string;
    important: boolean = false;
    listId:string;
    creator: TodoUser;
    assignee: TodoUser;
}