import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenaspracticasComponent } from './buenaspracticas.component';

describe('BuenaspracticasComponent', () => {
  let component: BuenaspracticasComponent;
  let fixture: ComponentFixture<BuenaspracticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuenaspracticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuenaspracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
