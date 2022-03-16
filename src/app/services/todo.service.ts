import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


const baseURL = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  public todo = new BehaviorSubject<Array<string>>([]);

  getTodo(userId: number){
    return this.http.get(`${baseURL}users/${userId}/todos`)
  }

  deleteTodo(id:number){
    return this.http.delete(`${baseURL}todos/${id}`)
  }
}
