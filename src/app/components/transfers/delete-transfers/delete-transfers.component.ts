import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TransfersService } from '../../../services/transfers/transfers.service';

@Component({
  selector: 'delete-transfers',
  templateUrl: './delete-transfers.component.html',
  styleUrls: ['./delete-transfers.component.css']
})
export class DeleteTransfersComponent implements OnInit {

  constructor(private modalService: NgbModal, private transfersService: TransfersService) { }
  @Input() modalHeader: string;
  @Input() modalBody: string;
  @Input() transferID: string;
  @Output() deleteItemEvent = new EventEmitter<string>();
  closeModal: string;
  ngOnInit(): void {
  }
  //this function open's modal popup and calls delete API when user clicks on "OK" button
  
  openModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeModal = `Closed with: ${result}`;
      this.transfersService.deleteTransfer(this.transferID).subscribe((data: any) => {
        this.deleteItemEvent.emit(data);
      });
    }, (reason) => {
      this.closeModal = `Dismissed`;
    });
    
  }

}
