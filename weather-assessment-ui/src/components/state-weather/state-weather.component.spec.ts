import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateWeatherComponent } from './state-weather.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatSnackBar} from "@angular/material/snack-bar";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";

describe('StateWeatherComponent', () => {
  let component: StateWeatherComponent;
  let fixture: ComponentFixture<StateWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,NoopAnimationsModule,],
      providers: [MatSnackBar,],
    });
    fixture = TestBed.createComponent(StateWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
