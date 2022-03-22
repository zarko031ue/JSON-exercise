import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  public postsChanged = new Subject<Post[]>();
  private sub: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.sub = this.postsService.posts.subscribe((posts: Post[]) => {
      this.posts = posts;
    });    
    this.postsChanged.next(this.posts.slice());
    this.postsChanged.subscribe(
      (post: Post[]) => {
        this.posts = post;
      }
    )
    
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
