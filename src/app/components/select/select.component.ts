import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'faa-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() options: string[] = [];
  @Input() forms: any[] = [];

  @Output() selectedEvent = new EventEmitter<string>();

  select(value: string) {
    this.selectedEvent.emit(value);
  }



}
