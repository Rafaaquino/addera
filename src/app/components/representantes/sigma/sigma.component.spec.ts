import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpSigmaComponent } from './sigma.component';

describe('AlfaComponent', () => {
  let component:  RpSigmaComponent;
  let fixture: ComponentFixture< RpSigmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  RpSigmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( RpSigmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
