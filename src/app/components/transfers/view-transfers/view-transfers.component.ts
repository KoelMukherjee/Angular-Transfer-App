import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Transfer } from 'src/app/models/transfer';
import { TransfersService } from 'src/app/services/transfers/transfers.service';

@Component({
  selector: 'view-transfers',
  templateUrl: './view-transfers.component.html',
  styleUrls: ['./view-transfers.component.css']
})
export class ViewTransfersComponent implements OnInit {
  @Input() transferID: string;
  viewTransfer: Transfer = {};
  closeModal: string;
  constructor(private modalService: NgbModal, private transfersService: TransfersService) { }

  ngOnInit(): void {
  }
  //This function will call API and populate the modal with data
  viewTransferDetails() {
    this.transfersService.getTransfer(this.transferID).subscribe((data: any) => {
      this.viewTransfer = data;
    })
  }
   // this function open's modal popup
  openModal(content) {
    this.modalService.open(content, {size: 'lg',  ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeModal = `Closed with: ${result}`;
    }, (reason) => {
      this.closeModal = `Dismissed`;
    });
  }
}
