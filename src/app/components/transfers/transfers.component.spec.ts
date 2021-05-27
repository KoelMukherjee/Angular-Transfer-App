import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPipe } from '../../pipes/search.pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { TransfersComponent } from './transfers.component';

describe('TransfersComponent', () => {
  let component: TransfersComponent;
  let fixture: ComponentFixture<TransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfersComponent, SearchPipe, SortPipe ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call sort Function', () => {
    component.sort('asc', 'Amount');
    expect(component.order).toBe('asc');
    expect(component.param).toBe('Amount');
  })
  it('should reload transfer details when any CRUD operation is performed', () => {
    let updatedTransferDetails = [{
      "ID":"5080157e-0f91-407f-834e-38407b8ded14",
      "account_holder":"Markus Bauer",
      "iban":"DE89 3704 0044 0532 0130 00",
      "amount":111111,
      "date":"1992-11-03",
      "note":"Monthly Savings"
   },
   {
      "ID":"be02cd17-92aa-41d7-9a3d-09a6b47b7207",
      "account_holder":"Maximillian Krueger",
      "iban":"DE69 3704 0012 0532 0965 00",
      "amount":850,
      "date":"1988-09-05",
      "note":"House Rent "
   }]
    component.reloadTransferDetails(updatedTransferDetails);
    expect(component.transfer_details).toBeTruthy();
  });
  
});
