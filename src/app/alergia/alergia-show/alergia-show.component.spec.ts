import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiaShowComponent } from './alergia-show.component';

describe('AlergiaShowComponent', () => {
  let component: AlergiaShowComponent;
  let fixture: ComponentFixture<AlergiaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergiaShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergiaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
