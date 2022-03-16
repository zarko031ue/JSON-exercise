import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';


const baseURL = 'https://jsonplaceholder.typicode.com/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  public albums = new BehaviorSubject<Array<string>>([]);
  public photos = new BehaviorSubject<Array<string>>([]);

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>( baseURL + 'users' );
  }

  getAlbums(userId: number){
    return this.http.get(`${baseURL}users/${userId}/albums`)
  }

  getPhotos(userId: number){
    return this.http.get(`${baseURL}albums/${userId}/photos`)
  }
  
}
