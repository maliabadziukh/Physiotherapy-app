import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhysioPatientsPage } from './physio-patients.page';

describe('PhysioPatientsPage', () => {
  let component: PhysioPatientsPage;
  let fixture: ComponentFixture<PhysioPatientsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioPatientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
