import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TransfersService } from './transfers.service';
export const mockData = {
  "ID": "be02cd17-92aa-41d7-9a3d-09a6b47b7207",
  "account_holder": "Maximillian Krueger",
  "iban": "DE69 3704 0012 0532 0965 00",
  "amount": 850,
  "date": "1988-09-05",
  "note": "House Rent "
}
describe('TransfersService', () => {
  let service: TransfersService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransfersService]
    });
    service = TestBed.inject(TransfersService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should should call getTransfer API', fakeAsync(() => {
    service.getTransfer('be02cd17-92aa-41d7-9a3d-09a6b47b7207').subscribe(transfer => {
      expect(transfer.length).toBe(1);
      expect(transfer).toEqual(mockData);
    });

    tick();
    const req = httpTestingController.expectOne(service.REST_API_SERVER + "/transfers/be02cd17-92aa-41d7-9a3d-09a6b47b7207");

    expect(req.request.method).toEqual('GET');
  }));
  it('should call delete Transfer API', fakeAsync(() => {
    service.deleteTransfer('be02cd17-92aa-41d7-9a3d-09a6b47b7207').subscribe(transfer => {
      expect(transfer.length).toBe(4);
    });
    tick();
    const req = httpTestingController.expectOne(service.REST_API_SERVER + "/transfers/be02cd17-92aa-41d7-9a3d-09a6b47b7207");
    expect(req.request.method).toEqual('DELETE');
  }));
  it('should call edit Transfer API', () => {
    service.editTransfer(mockData).subscribe(transfer => {
      expect(transfer.length).toBe(5);
    });
    const req = httpTestingController.expectOne(service.REST_API_SERVER + "/transfers/be02cd17-92aa-41d7-9a3d-09a6b47b7207");
    expect(req.request.method).toEqual('PUT');
  })
});
