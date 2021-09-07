import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asunto3Component } from './asunto3.component';

describe('Asunto3Component', () => {
  let component: Asunto3Component;
  let fixture: ComponentFixture<Asunto3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asunto3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Asunto3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
