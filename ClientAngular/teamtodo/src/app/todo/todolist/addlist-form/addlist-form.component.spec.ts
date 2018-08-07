import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlistFormComponent } from './addlist-form.component';

describe('AddlistFormComponent', () => {
  let component: AddlistFormComponent;
  let fixture: ComponentFixture<AddlistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
