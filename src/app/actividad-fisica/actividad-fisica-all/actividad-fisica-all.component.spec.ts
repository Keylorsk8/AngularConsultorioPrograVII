import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadFisicaAllComponent } from './actividad-fisica-all.component';

describe('ActividadFisicaAllComponent', () => {
  let component: ActividadFisicaAllComponent;
  let fixture: ComponentFixture<ActividadFisicaAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActividadFisicaAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadFisicaAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
