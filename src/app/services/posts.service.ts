import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


const baseURL = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  getSinglePost = new Subject<Object>()
  public posts = new BehaviorSubject<Array<string>>([]);

  constructor(private http: HttpClient) { }

  getPosts(userId: number){
    return this.http.get(`${baseURL}users/${userId}/posts`)
  }

  getPost(id: number){
    return this.http.get(`${baseURL}posts/${id}`);
  }

  getPostsComments(id: number){
    return this.http.get(`${baseURL}posts/${id}/comments?`);
  }

  updatePosts(title: string, body: string, id: number){
    const data = {title: title, body: body}
    this.http.put(`${baseURL}posts/${id}`, data)
      .subscribe(response => {
        console.log(response);
      })
  }
 
  addPost(title: string, body: string){
    const data = {title: title, body: body}
      this.http.post(`${baseURL}posts`, data)
        .subscribe(response => {
          console.log(response);
  })
    
}  
}
