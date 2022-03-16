import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnDestroy  {
  photos: string[] =[];
  sub: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
   this.sub = this.userService.photos
     .subscribe((photos: any[]) => {
       this.photos = photos;
     })
  }

  ngOnDestroy(): void {
      this.sub.unsubscribe();
  }

}
