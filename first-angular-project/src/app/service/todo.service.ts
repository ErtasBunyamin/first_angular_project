import { Subject } from "rxjs";

import { TodoModel } from "../model/todo.model";

export class TodoService {
    private todoList: TodoModel[] = [
        {description: "do Homework", action: false}
    ];
    public updateNotify = new Subject();

    addTodo(description: string, action: boolean) {
        this.todoList.push({description: description,action: action});
        this.updateNotify.next();
    }

    removeTodo(item: TodoModel) {
        this.todoList = this.todoList.filter(p=>p.description !== item.description && p.action !==item.action);
        this.updateNotify.next();
    }

    changeItemStatus(index: number) {
        this.todoList[index].action = !this.todoList[index].action; 
        this.updateNotify.next();
    } 

    getTodoList() {
        return [...this.todoList];
    }
}