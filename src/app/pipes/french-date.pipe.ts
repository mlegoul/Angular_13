import {Pipe, PipeTransform} from '@angular/core';
import {formatDate} from '@angular/common';

@Pipe({
  name: 'frenchDate'
})
export class FrenchDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return formatDate(value, 'EEEE d MMMM yyyy, à HH:mm', 'fr-FR');
  }

}
