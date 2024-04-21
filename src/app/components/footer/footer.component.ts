import { Component } from '@angular/core';

@Component({
  selector: 'faa-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
      required: false,
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
  ]
}
