import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todos.model';


const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public todo = new BehaviorSubject<Todo[]>([]);

  getTodo(userId: number){
    return this.http.get<Todo[]>(`${baseURL}users/${userId}/todos`)
  }

  deleteTodo(id:number){
    return this.http.delete<Todo>(`${baseURL}todos/${id}`)
  }
}
