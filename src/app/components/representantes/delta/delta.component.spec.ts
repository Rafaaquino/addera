import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpDeltaComponent } from './delta.component';

describe('AlfaComponent', () => {
  let component:  RpDeltaComponent;
  let fixture: ComponentFixture< RpDeltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  RpDeltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( RpDeltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
