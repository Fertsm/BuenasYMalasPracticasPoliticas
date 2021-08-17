import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalaspracticasComponent } from './malaspracticas.component';

describe('MalaspracticasComponent', () => {
  let component: MalaspracticasComponent;
  let fixture: ComponentFixture<MalaspracticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalaspracticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MalaspracticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
