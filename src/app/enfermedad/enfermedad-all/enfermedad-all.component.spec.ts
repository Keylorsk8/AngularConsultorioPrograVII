import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadAllComponent } from './enfermedad-all.component';

describe('EnfermedadAllComponent', () => {
  let component: EnfermedadAllComponent;
  let fixture: ComponentFixture<EnfermedadAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnfermedadAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermedadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
