import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asunto80Component } from './asunto80.component';

describe('Asunto80Component', () => {
  let component: Asunto80Component;
  let fixture: ComponentFixture<Asunto80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asunto80Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Asunto80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
