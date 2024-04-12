import { Component } from '@angular/core';

@Component({
  selector: 'faa-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
    todo: string = '';
    todos: string[] = [];

    add() {
        this.todos.push(this.todo);
        this.todo = '';
    }

    remove(index: number) {
      if (confirm('Are you sure you want to delete this item?'))
        this.todos.splice(index, 1);
    }
}
