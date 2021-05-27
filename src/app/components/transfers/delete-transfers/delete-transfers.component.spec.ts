import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTransfersComponent } from './delete-transfers.component';

describe('DeleteTransfersComponent', () => {
  let component: DeleteTransfersComponent;
  let fixture: ComponentFixture<DeleteTransfersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTransfersComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.openModal('DeleteModal');
    expect(component).toBeTruthy();
  });
});
