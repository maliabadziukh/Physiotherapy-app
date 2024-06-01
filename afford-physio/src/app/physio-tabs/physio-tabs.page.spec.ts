import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhysioTabsPage } from './physio-tabs.page';

describe('PhysioTabsPage', () => {
  let component: PhysioTabsPage;
  let fixture: ComponentFixture<PhysioTabsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysioTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
