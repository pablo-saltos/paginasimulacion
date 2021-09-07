import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asunto69Component } from './asunto69.component';

describe('Asunto69Component', () => {
  let component: Asunto69Component;
  let fixture: ComponentFixture<Asunto69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asunto69Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Asunto69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
