import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWeatherComponent } from './state-weather.component';

describe('AutoCompleteStateComponent', () => {
  let component: StateWeatherComponent;
  let fixture: ComponentFixture<StateWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StateWeatherComponent]
    });
    fixture = TestBed.createComponent(StateWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
