import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './albums/photos/photos.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostsComponent } from './posts/posts.component';
import { TodoComponent } from './todo/todo.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id/photos', component: PhotosComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'posts/new', component: PostEditComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: 'posts/:id/edit', component: PostEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
