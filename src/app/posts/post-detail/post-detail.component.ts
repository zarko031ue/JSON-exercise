import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  id: number
  posts: Post[] = [];
  comments: string[] = [];
  i:number;
  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
       
      }
    )
    this.postService.getPost(this.id).subscribe(
      (post: Post) => {
        this.posts.push(post);
        console.log(post);
      }
    )

    this.postService.getPostsComments(this.id).subscribe(
      (comments: string[]) => {
        this.comments = comments;
        this.i = comments.length
        console.log(this.comments);
      }
    )
  }


}
