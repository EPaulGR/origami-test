import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefono',
  standalone: true
})
export class TelefonoPipe implements PipeTransform {

  transform(value: string): string {
      if (value && value.length === 10) {
        return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`;
      }
      return value;
  }

}
