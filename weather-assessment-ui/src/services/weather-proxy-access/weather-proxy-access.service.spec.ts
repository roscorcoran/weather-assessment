import { TestBed } from '@angular/core/testing';

import { WeatherProxyAccessService } from './weather-proxy-access.service';

xdescribe('WeatherProxyAccessService', () => {
  let service: WeatherProxyAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherProxyAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
