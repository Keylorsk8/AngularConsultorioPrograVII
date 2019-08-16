import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlergiaComponent } from './create-alergia.component';

describe('CreateAlergiaComponent', () => {
  let component: CreateAlergiaComponent;
  let fixture: ComponentFixture<CreateAlergiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlergiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
