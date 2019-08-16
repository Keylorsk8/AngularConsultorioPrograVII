import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiaAllComponent } from './alergia-all.component';

describe('AlergiaAllComponent', () => {
  let component: AlergiaAllComponent;
  let fixture: ComponentFixture<AlergiaAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergiaAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergiaAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
