import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpAlfaComponent } from './alfa.component';

describe('AlfaComponent', () => {
  let component:  RpAlfaComponent;
  let fixture: ComponentFixture< RpAlfaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  RpAlfaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( RpAlfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
