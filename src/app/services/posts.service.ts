import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { Comments } from '../models/comments.model';
import { Post } from '../models/post.model';

import { environment } from 'src/environments/environment';
import { PostBody } from '../models/postBody.model';
import { PostWithComments } from '../models/postWithComments.model';

const baseURL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  public posts = new BehaviorSubject<Post[]>([]);

  constructor(private http: HttpClient) {}

  getPosts(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${baseURL}users/${userId}/posts`);
  }

  getPostWithComments(id: number) {
    return this.http.get<PostWithComments>(`${baseURL}posts/${id}`).pipe(
      switchMap((post) => {
        console.log('post', post);
        return this.http.get(`${baseURL}posts/${id}/comments?`).pipe(
          map((comments) => {
            return {
              ...post,
              comments,
            };
          })
        );
      })
    );
  }

  updatePosts(title: string, body: string, id: number) {
    const data: PostBody = { title: title, body: body };
    this.http
      .put<Post>(`${baseURL}posts/${id}`, data)
      .subscribe((response: Post) => {
        console.log(response);
      });
  }

  addPost(title: string, body: string) {
    const data: PostBody = { title: title, body: body };
    this.http
      .post<Post>(`${baseURL}posts`, data)
      .subscribe((response: Post) => {
        console.log(response);
      });
  }
}

