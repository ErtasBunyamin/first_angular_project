import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from "rxjs";
import { TodoModel } from '../model/todo.model';

import { TodoService } from '../service/todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  private todoList!: TodoModel[];
  public todoInput!: string;
  private subscription!: Subscription;
  
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getTodoList();
    this.subscription = this.todoService.updateNotify.subscribe(()=>{
      this.todoList = this.todoService.getTodoList();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddTodo(form: NgForm) {
    if(form.valid)
      this.todoService.addTodo(form.value.todoName, false);
  }

  onRemoveTodo(item: TodoModel){
    this.todoService.removeTodo(item);
  }

  onChangeStatus(item: number) {
    this.todoService.changeItemStatus(item);
  }

  getTodoList() {
    return this.todoList;
  }

}
