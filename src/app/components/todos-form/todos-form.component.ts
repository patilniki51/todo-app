import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../model/Todo";
import { v4 as uuidv4 } from "uuid";
import {TodoService} from "./../../service/todo.service"

@Component({
  selector: 'app-todos-form',
  templateUrl: './todos-form.component.html',
  styleUrls: ['./todos-form.component.css']
})
export class TodosFormComponent implements OnInit {
  todoTitle: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  handleAdd(){
    const todo: Todo = {
      id: uuidv4(),
      title: this.todoTitle,
      isCompleted: false,
      date: new Date()
    };
    this.todoService.addTodo(todo);
    this.todoTitle = "";
  }

  


}
