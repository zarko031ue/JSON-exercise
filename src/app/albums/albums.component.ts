import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Album } from '../models/albums.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums: Album[] = [];
  sub: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.sub = this.userService.albums
    .subscribe((albums: Album[]) => {
      this.albums = albums;
    })
  }
  
  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
