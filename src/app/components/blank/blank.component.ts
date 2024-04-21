import {Component, Input} from '@angular/core';

@Component({
  selector: 'faa-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss']
})
export class BlankComponent {
  @Input({ required: true }) title: string = '';
  @Input() description: string | number = '';
  @Input() sourceTitle: string = '';
  @Input({ required: false }) image: string = '';
}
