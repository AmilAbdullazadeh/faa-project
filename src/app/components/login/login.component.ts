import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'faa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  mark: string = ''
  marks: string[] = []
  moves: any[] = []

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
    private router: Router
  ) {
    this.newGame()
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }
}
