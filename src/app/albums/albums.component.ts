import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums: string[] = [];
  photos: string[] = [];
  sub: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.sub = this.userService.albums
    .subscribe((albums: any[]) => {
      this.albums = albums;
    })
  }
  
  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }
}
