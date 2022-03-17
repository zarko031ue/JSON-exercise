import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { Comments } from '../models/comments.model';
import { Post } from '../models/post.model';

import { environment } from 'src/environments/environment'; 
import { PostBody } from '../models/postBody.model';

const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
 
  public posts = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) { }

  getPosts(userId: number){
    return this.http.get<Post[]>(`${baseURL}users/${userId}/posts`)
  }

  getPost(id: number){
    return this.http.get<Post>(`${baseURL}posts/${id}`);
  }

  getPostsComments(id: number){
    return this.http.get<Comments[]>(`${baseURL}posts/${id}/comments?`);
  }

  updatePosts(title: string, body: string, id: number){
    const data: PostBody = {title: title, body: body}
    this.http.put<Post>(`${baseURL}posts/${id}`, data)
      .subscribe((response:Post) => {
        console.log(response);
      })
  }
 
  addPost(title: string, body: string){
    const data: PostBody = {title: title, body: body}
      this.http.post<Post>(`${baseURL}posts`, data)
        .subscribe((response: Post) => {
          console.log(response);
  })
    
}  
}
