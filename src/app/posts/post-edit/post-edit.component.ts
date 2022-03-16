import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  editMode = false;
  id: number;
  post: any;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private postService: PostsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });
  }

  form = this.fb.group({
    title: ['', Validators.required],
    textarea: ['', Validators.required],
  });

  private initForm() {
    let title = '';
    let body = '';

    if (this.editMode) {
      this.postService.getPost(this.id).subscribe((post: any) => {
        this.post = post;
        title = this.post.title;
        body = this.post.body;
        this.form = this.fb.group({
          title: [title, Validators.required],
          textarea: [body, Validators.required],
        });
      });
    }
  }

  onCancel() {
    this.router.navigate(['/posts']);
  }

  onSubmit(form: FormGroup) {
    if(this.editMode){
      this.postService.updatePosts(this.form.controls['title'].value, this.form.controls['textarea'].value, this.id);
    } else {
      this.postService.addPost(this.form.controls['title'].value, this.form.controls['textarea'].value);
    }
    this.onCancel();
 
  }


}
