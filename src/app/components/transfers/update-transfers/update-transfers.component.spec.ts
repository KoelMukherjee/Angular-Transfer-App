import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { UpdateTransfersComponent } from './update-transfers.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TransfersService } from '../../../services/transfers/transfers.service';
import * as Rx from 'rxjs';

export const mockData = {
  "ID": "be02cd17-92aa-41d7-9a3d-09a6b47b7207",
  "account_holder": "Maximillian Krueger",
  "iban": "DE69 3704 0012 0532 0965 00",
  "amount": 850,
  "date": "1988-09-05",
  "note": "House Rent "
}
describe('UpdateTransfersComponent', () => {
  let component: UpdateTransfersComponent;
  let fixture: ComponentFixture<UpdateTransfersComponent>;
  let service: TransfersService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateTransfersComponent],
      imports: [HttpClientTestingModule],
      providers: [TransfersService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(TransfersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call viewTransferDetails and get data from service call', fakeAsync(() => {
    spyOn(service, "getTransfer").and.callFake(() => { return Rx.of(mockData) });
    component.operationName = 'Edit';
    component.viewTransferDetails();
    component.openModal('EditModal');
    expect(service.getTransfer).toHaveBeenCalled();
    expect(component.viewTransfer).toEqual(mockData);
    tick(100);
   }));
   
  it('should call onClickSubmit and submit data to the service call', fakeAsync(() => {
    spyOn(service, "editTransfer").and.callFake(() => { return Rx.of(mockData) });
    component.onClickSubmit({form: { value : mockData}});
    expect(service.editTransfer).toHaveBeenCalled();
   }));

});
