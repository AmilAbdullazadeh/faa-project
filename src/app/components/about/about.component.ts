import { Component } from '@angular/core';
import {User} from "../../models/user";
import {ListService} from "../../services/list.service";
import {CommonModule, DatePipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {TitlePipe} from "../../pipes/title.pipe";
import {SharedModule} from "../../shared/shared.module";
import {AboutRoutingModule} from "./about-routing.module";

@Component({
  selector: 'faa-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  providers: [DatePipe],
  imports: [
    SharedModule,
    AboutRoutingModule
  ]
})
export class AboutComponent {
    todo: string = '';
    todos: string[] = [];
    cities: string[] = ['Baku', 'Ganja', 'Sumqayit', 'Lankaran', 'Shaki'];

    forms = [
      {
        name: 'Name',
        placeholder: 'Enter your name',
        type: 'text',
        required: true,
        value: '',
        error: ''
      },
      {
        name: 'Email',
        placeholder: 'Enter your email',
        type: 'email',
        required: true,
        value: '',
        error: ''
      },
      {
        name: 'Password',
        placeholder: 'Enter your password',
        type: 'password',
        required: true,
        value: '',
        error: ''
      },
      {
        name: 'Phone',
        placeholder: 'Enter your phone',
        type: 'tel',
        required: true,
        value: '',
        error: ''
      }
    ]

    birthday: string = '';

    users: User[] = []

    constructor(
      private listService: ListService,
      private _datePipe: DatePipe
    ) {
      this.moreUsers()

      const dateStr = 'Fri Apr 15 1988 00:00:00 GMT+0500 (Azerbaijan Summer Time)';
      this.birthday = this.formatDate(dateStr);
    }

  formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return this._datePipe.transform(date, 'dd/MM/yyyy') || '';
  }

    add() {
        this.todos.push(this.todo);
        this.todo = '';
    }

    remove(index: number) {
      if (confirm('Are you sure you want to delete this item?'))
        this.todos.splice(index, 1);
    }

    moreUsers() {
      this.users = this.listService.getUsers();
    }

    addCity(city: string) {
      this.cities.push(city);
    }

    showCity(city: string) {
      alert(city);
    }

}
