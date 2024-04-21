import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Location} from "../../models/location";
import {User_JSON} from "../../models/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'faa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users: User_JSON[] = [];

  constructor(
    private userService: UserService
  ) {
    this.getUsers();
    this.getUserById(1);
    this.postUser();
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (res: User_JSON[]) => {
        this.users = res;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
      },
      complete: () => {
        console.log('Users fetched successfully');
      }
    });
  }

  getUserById(id: number) {
    this.userService.getUserById(id).subscribe({
      next: (res: User_JSON) => {
        console.log('User:', res);
      },
      error: (error) => {
        console.error('Error fetching user:', error);
      },
      complete: () => {
        console.log('User fetched successfully');
      }
    });
  }

  postUser() {

    const user: User_JSON = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    };

    this.userService.postUser(user).subscribe({
      next: (res: User_JSON) => {
        console.log('User posted:', res);
      },
      error: (error) => {
        console.error('Error posting user:', error);
      },
      complete: () => {
        console.log('User posted successfully');
      }
    });
  }


}
