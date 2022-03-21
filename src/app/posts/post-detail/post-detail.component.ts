import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Comments } from 'src/app/models/comments.model';
import { Post } from 'src/app/models/post.model';
import { PostWithComments } from 'src/app/models/postWithComments.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  id: number
  postWithComments: PostWithComments[] = [];
  i:number;
  constructor(private route: ActivatedRoute, private postService: PostsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
       
      }
    )
     this.getPostWithCom();
  }

  getPostWithCom(){
    this.postService.getPostWithComments(this.id)
      .subscribe(
      (postWithComments: PostWithComments) => {
        this.postWithComments.push(postWithComments)
        console.log(this.postWithComments)
      }
      )
  }
}
