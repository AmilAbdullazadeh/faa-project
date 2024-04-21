import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {USERS} from "../mocks/users";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  list: User[] = USERS

  constructor() { }

  getUsers(): User[] {
    return this.list
  }
}
