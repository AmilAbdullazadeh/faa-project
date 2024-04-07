import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'faa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  kreditMiqdari: number = 0;
  kreditMuddeti: number = 0;
  ayliqOdenis: number = 0;

  kreditHesabla(): number {
    this.ayliqOdenis = Math.round(this.kreditMiqdari / this.kreditMuddeti)
    return this.ayliqOdenis;
  }
}
