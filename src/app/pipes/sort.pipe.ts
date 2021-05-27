import { Pipe, PipeTransform } from '@angular/core';
import { Transfer } from '../models/transfer';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(transfer_details: Transfer[], ...args: any[]): Transfer[] {
    if (transfer_details && args[0] == 'asc') {
      transfer_details.sort((a, b) => (a[args[1]] > b[args[1]]) ? 1 : ((b[args[1]] > a[args[1]]) ? -1 : 0))
    }
    if (transfer_details && args[0] == 'desc') {
      transfer_details.sort((a, b) => (a[args[1]] < b[args[1]]) ? 1 : ((b[args[1]] < a[args[1]]) ? -1 : 0))
    }

    return transfer_details;

  }

}
