import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsListModalComponent } from './details-list-modal.component';

describe('DetailsListModalComponent', () => {
  let component: DetailsListModalComponent;
  let fixture: ComponentFixture<DetailsListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
