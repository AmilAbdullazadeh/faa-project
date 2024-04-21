import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // title pipe
    return value.split(' ').map((word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }

}
