import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];

  constructor() { 
    this.todos = [
      {
        id: "111",
        title: "Learn Java",
        isCompleted: true,
        date: new Date()
      },
      {
        id: "222",
        title: "Learn Spring Boot",
        isCompleted: true,
        date: new Date()
      },
      {
        id: "333",
        title: "Learn Angular",
        isCompleted: false,
        date: new Date()
      },

    ];
  }

  getTodos(){
    return of(this.todos);//todos are now observables
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  changeStatus(todo: Todo){
    this.todos.map( singleTodo => {
      if(singleTodo.id == todo.id){
        todo.isCompleted = !todo.isCompleted;
      }
    });
  }

  deleteTodo(todo: Todo){
    const index = this.todos.findIndex(
      (currentTodo) => currentTodo.id == todo.id,
    );
    this.todos.splice(index, 1);
  }
}
