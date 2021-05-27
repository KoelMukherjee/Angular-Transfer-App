import { Pipe, PipeTransform } from '@angular/core';
import { Transfer } from '../models/transfer';
@Pipe({
  name: 'searchFilter'
})
export class SearchPipe implements PipeTransform {

  transform(transfer_details: Transfer[], args?: any): Transfer[] {
    if (!args) {
      return transfer_details;
    }
    return transfer_details.filter((val) => {
      let matchedString = (val.account_holder.toLocaleLowerCase().includes(args.toLocaleLowerCase())) || (val.note.toLocaleLowerCase().includes(args.toLocaleLowerCase()));
      return matchedString;
    })

  }

}