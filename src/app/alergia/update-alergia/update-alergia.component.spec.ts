import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlergiaComponent } from './update-alergia.component';

describe('UpdateAlergiaComponent', () => {
  let component: UpdateAlergiaComponent;
  let fixture: ComponentFixture<UpdateAlergiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAlergiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlergiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
