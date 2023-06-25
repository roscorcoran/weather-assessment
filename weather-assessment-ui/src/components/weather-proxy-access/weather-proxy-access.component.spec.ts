import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherProxyAccessComponent } from './weather-proxy-access.component';

xdescribe('WeatherProxyAccessComponent', () => {
  let component: WeatherProxyAccessComponent;
  let fixture: ComponentFixture<WeatherProxyAccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherProxyAccessComponent]
    });
    fixture = TestBed.createComponent(WeatherProxyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
