import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomectComponent } from './homect.component';

describe('HomectComponent', () => {
  let component: HomectComponent;
  let fixture: ComponentFixture<HomectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {Component} from '@angular/core';

/**
 * @title Basic cards
 */
@Component({
  selector: 'card-overview-example',
  templateUrl: 'card-overview-example.html',
})
export class CardOverviewExample {}