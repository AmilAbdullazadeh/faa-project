import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ListService} from "../../services/list.service";
import {User} from "../../models/user";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'faa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  mark: string = ''
  marks: string[] = []
  moves: any[] = []
  highlightColor: string = 'red'

  saved: boolean = false;

  save() {
    this.saved = true;
  }

  users: User[] = [];

  condition: boolean = false;

  newGame() {
    this.marks = [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
    ]
    this.mark = 'X'
    this.moves = []
  }

  add(index: number) {
    if (this.marks[index] === '') {
      this.marks[index] = this.mark
      this.moves.push([...this.marks])
      this.mark = this.mark === 'X' ? 'O' : 'X'
    }
  }

  returnMove(index: number) {
    this.marks = this.moves[index]
  }

  constructor(
    private router: Router,
    private listService: ListService,
    private authService: AuthService
  ) {
    this.newGame()
  }

  getUsers() {
    this.users = this.listService.getUsers()
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }

  login() {
    this.authService.login()
    if (this.authService.isLoggedIn) {
      this.gotoHome()
    }
  }
}
