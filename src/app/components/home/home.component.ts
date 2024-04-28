import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Location} from "../../models/location";
import {User_JSON} from "../../models/user";
import {UserService} from "../../services/user.service";
import {Subject, Subscription, takeUntil} from "rxjs";
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

interface Person {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'faa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();

  persons: Person[] | any = [];
  roles: string[] = ['admin', 'user', 'guest'];

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  addPerson(personForm: NgForm) {
    if (personForm.valid) {
      this.persons.push(personForm.value);
      personForm.resetForm();
    }
  }

  // this.personForm.controls['role'].setValue('admin');

}
