import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable, BehaviorSubject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: Observable<User[]>;
  private _users: BehaviorSubject<User[]>;
  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = 'https://jsonplaceholder.typicode.com/users';
    this._users = <BehaviorSubject<User[]>>new BehaviorSubject([]);
    this.users = this._users.asObservable();
  }

  get UsersDataSource(): BehaviorSubject<User[]>{
    return this._users;
  }

  loadUsers(): void {
    this.http.get<User[]>(this.serviceUrl).subscribe(users => {
      this._users.next(users);
    });
  }
}
