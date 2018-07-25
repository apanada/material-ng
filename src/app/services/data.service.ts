import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = 'https://jsonplaceholder.typicode.com/users';
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.serviceUrl).pipe(
      map(res => res)
    );
  }
}
