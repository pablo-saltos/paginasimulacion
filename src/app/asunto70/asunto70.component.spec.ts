import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asunto70Component } from './asunto70.component';

describe('Asunto70Component', () => {
  let component: Asunto70Component;
  let fixture: ComponentFixture<Asunto70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asunto70Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Asunto70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
