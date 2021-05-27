import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ViewTransfersComponent } from './view-transfers.component';
import * as Rx from 'rxjs';
import { TransfersService } from 'src/app/services/transfers/transfers.service';

export const mockData = {
  "ID": "be02cd17-92aa-41d7-9a3d-09a6b47b7207",
  "account_holder": "Maximillian Krueger",
  "iban": "DE69 3704 0012 0532 0965 00",
  "amount": 850,
  "date": "1988-09-05",
  "note": "House Rent "
}

describe('ViewTransfersComponent', () => {
  let component: ViewTransfersComponent;
  let fixture: ComponentFixture<ViewTransfersComponent>;
  let service: TransfersService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTransfersComponent ],
      imports: [HttpClientTestingModule],
      providers: [TransfersService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(TransfersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call viewTransferDetails and get data from service call', fakeAsync(() => {
    spyOn(service, "getTransfer").and.callFake(() => { return Rx.of(mockData) });
    component.openModal('ViewModal');
    component.viewTransferDetails();
    expect(service.getTransfer).toHaveBeenCalled();
    expect(component.viewTransfer).toEqual(mockData);
    tick(100);
   }));
});
