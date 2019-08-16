import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlergiaIndexComponent } from './alergia-index.component';

describe('AlergiaIndexComponent', () => {
  let component: AlergiaIndexComponent;
  let fixture: ComponentFixture<AlergiaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlergiaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlergiaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
