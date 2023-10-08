import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveAgencyComponent } from './approve-agency.component';

describe('ApproveAgencyComponent', () => {
  let component: ApproveAgencyComponent;
  let fixture: ComponentFixture<ApproveAgencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApproveAgencyComponent]
    });
    fixture = TestBed.createComponent(ApproveAgencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
