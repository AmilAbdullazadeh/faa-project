import { Injectable } from '@angular/core';
import {User_JSON} from "../models/user";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = 'https://jsonplaceholder.typicode.com';

  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http.get<User_JSON[]>(`${this.baseUrl}/todos`);
  }

  getUserById(id: number): Observable<User_JSON> {
    return this.http.get<User_JSON>(`${this.baseUrl}/todos/${id}`)
  }

  postUser(user: User_JSON): Observable<User_JSON> {
    return this.http.post<User_JSON>(`${this.baseUrl}/todos`, user);
  }

}
