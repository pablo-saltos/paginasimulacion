import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebacanComponent } from './pruebacan.component';

describe('PruebacanComponent', () => {
  let component: PruebacanComponent;
  let fixture: ComponentFixture<PruebacanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebacanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebacanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
