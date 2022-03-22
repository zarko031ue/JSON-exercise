import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../models/albums.model';
import { Photos } from '../models/photos.model';
import { User } from '../models/user.model';


const baseURL =  environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  public albums = new BehaviorSubject<Album[]>([]);

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>( baseURL + 'users' );
  }

  getAlbums(userId: number){
    return this.http.get<Album[]>(`${baseURL}users/${userId}/albums`)
  }

  getPhotos(userId: number){
    return this.http.get<Photos[]>(`${baseURL}albums/${userId}/photos`)
  }
  
}
