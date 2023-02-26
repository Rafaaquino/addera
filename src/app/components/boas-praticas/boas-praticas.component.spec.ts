import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoasPraticasComponent } from './boas-praticas.component';

describe('BoasPraticasComponent', () => {
  let component: BoasPraticasComponent;
  let fixture: ComponentFixture<BoasPraticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoasPraticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoasPraticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
