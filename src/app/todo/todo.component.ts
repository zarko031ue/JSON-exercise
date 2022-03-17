import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todos.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  sub: Subscription;
  status = 'Delete successful';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.sub = this.todoService.todo.subscribe((todos: Todo[]) => {
      this.todos = todos;
    });
    console.log(this.status);
  }

  onChangeTodos(event: any) {
    const id = event.target.value;
    const isChecked = event.target.checked;
    console.log(id, isChecked);

    this.todos = this.todos.map((todo) => {
      if (todo.id == id) {
        todo.completed = isChecked;
        return todo;
      }
      return todo;
    });
    console.log(this.todos);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id)
      .subscribe(
        () => console.log(this.status));
        this.todos.splice(id, 1);
  }

}
