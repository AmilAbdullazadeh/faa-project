import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {decrement, increment, reset} from "../../store/counter/counter.actions";

@Component({
  selector: 'faa-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent {
  count$: Observable<number> | undefined

  // count: number = 0

  constructor(
    private store: Store<{ counter: number }>
  ) {
    this.count$ = store.select('counter')
    // this.count$?.subscribe((res) => {
    //   this.count = res
    // })
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement())
  }

  reset() {
    this.store.dispatch(reset())
  }
}
