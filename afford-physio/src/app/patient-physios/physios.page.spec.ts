import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhysiosPage } from './physios.page';

describe('PhysiosPage', () => {
  let component: PhysiosPage;
  let fixture: ComponentFixture<PhysiosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhysiosPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PhysiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
