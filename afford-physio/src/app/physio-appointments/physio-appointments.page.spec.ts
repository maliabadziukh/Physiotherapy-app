import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhysioAppointmentsPage } from './physio-appointments.page';

describe('PhysioAppointmentsPage', () => {
  let component: PhysioAppointmentsPage;
  let fixture: ComponentFixture<PhysioAppointmentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioAppointmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
