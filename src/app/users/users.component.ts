import { Component, OnInit } from '@angular/core';
import { Album } from '../models/albums.model';
import { Post } from '../models/post.model';
import { Todo } from '../models/todos.model';
import { User } from '../models/user.model';
import { PostsService } from '../services/posts.service';
import { TodoService } from '../services/todo.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  albums: Album[] = [];
  todo: Todo[] = [];
  posts: Post[] = [];

  constructor(
    private userService: UserService,
    private todoService: TodoService,
    private postsService: PostsService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.users = users;
      console.log(users);
    });
  }

  getAlbums(userId: number) {
    this.userService.getAlbums(userId).subscribe((albums: Album[]) => {
      this.albums = albums;
      this.userService.albums.next(this.albums);
      console.log(albums);
    });
  }

  getTodos(userId: number) {
    this.todoService.getTodo(userId).subscribe((todo: Todo[]) => {
      this.todo = todo;
      this.todoService.todo.next(this.todo);
      console.log(this.todo);
    });
  }

  getPosts(userId: number)  {
    this.postsService.getPosts(userId).subscribe((posts: Post[]) => {
      this.posts = posts;
      this.postsService.posts.next(this.posts)
      console.log(this.posts);
    })
  }
}
