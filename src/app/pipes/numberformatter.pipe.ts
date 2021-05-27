import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'numberFormatterFilter'
})
export class NumberFormatterPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
  }

}