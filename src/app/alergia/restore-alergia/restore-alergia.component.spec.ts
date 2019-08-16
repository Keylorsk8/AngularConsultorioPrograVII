import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreAlergiaComponent } from './restore-alergia.component';

describe('RestoreAlergiaComponent', () => {
  let component: RestoreAlergiaComponent;
  let fixture: ComponentFixture<RestoreAlergiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoreAlergiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoreAlergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
