import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponent } from './teste.component';

describe('AlfaComponent', () => {
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
