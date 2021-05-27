import { Component, OnInit } from '@angular/core';
import { Transfer} from '../../models/transfer';
import { TransfersService } from '../../services/transfers/transfers.service';


@Component({
  selector: 'transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})


export class TransfersComponent implements OnInit {
  transfer_details: Transfer[];
  modalHeader: string;
  modalBody: string;
  transferID: string;
  searchString: string = "";
  sortDate = true;
  sortAmount = true;
  order: string = 'asc';
  param: string = 'date';
  constructor(private transfersService: TransfersService) { }

  // API call in ngOnInit populates the table with data
  ngOnInit(): void {
    this.modalHeader = "Delete Transfer Details";
    this.modalBody = "Are you sure you want to detele transfer with ID:"
    this.transfersService.getAllTransfers().subscribe((data: any[]) => {
      this.transfer_details = data;
    })
  }
  // this function toggles the sort icons in Amount and Date field of table

  sort(order: string, param: string) {
    if(param === 'amount')
    this.sortAmount = !this.sortAmount; 
    if(param === 'date')
    this.sortDate = !this.sortDate;
    this.order= order; 
    this.param = param;
  }
  // this function reloads the table after any CRUD operation
  
  reloadTransferDetails(event: any) {
    this.transfer_details = event;
  }

}
