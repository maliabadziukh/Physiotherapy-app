import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhysioHomePage } from './physio-home.page';

describe('PhysioHomePage', () => {
  let component: PhysioHomePage;
  let fixture: ComponentFixture<PhysioHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
