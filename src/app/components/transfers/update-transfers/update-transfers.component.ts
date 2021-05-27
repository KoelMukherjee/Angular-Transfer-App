import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Transfer } from 'src/app/models/transfer';
import { TransfersService } from '../../../services/transfers/transfers.service';

@Component({
  selector: 'update-transfers',
  templateUrl: './update-transfers.component.html',
  styleUrls: ['./update-transfers.component.css']
})
export class UpdateTransfersComponent implements OnInit {
  
  constructor(private modalService: NgbModal, private transfersService: TransfersService) { }
  @Input() operationName: string;
  @Input() transferID: string;
  @Output() editItemEvent = new EventEmitter<any>();
  viewTransfer: Transfer = {};
  closeModal: string;

  ngOnInit(): void {
  }
  // This function will call API and populate the modal with data only when the operation is 'Edit' as the modal popup is also used for adding new transfer

  viewTransferDetails() {
    if(this.operationName === 'Edit') {
    this.transfersService.getTransfer(this.transferID).subscribe((data: any) => {
      this.viewTransfer = data;
    })
  }
  }
  // this function open's modal popup and calls edit API when user clicks on "Submit" button

  openModal(content) {
    this.modalService.open(content, {size: 'lg',  ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeModal = `Closed with: ${result}`;
    }, (reason) => {
      this.closeModal = `Dismissed`;
    });
  }
  //this function will make a call to API which will update the record

  onClickSubmit(editTransferDetails) {
    this.transfersService.editTransfer(editTransferDetails.form.value).subscribe((data: any) => {
      this.editItemEvent.emit(data);
    })
  }
}
