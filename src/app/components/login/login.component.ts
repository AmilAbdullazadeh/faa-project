import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'faa-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router
  ) {}

  gotoHome() {
    this.router.navigate(['/home']);
  }
}
