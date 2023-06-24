import { TestBed } from '@angular/core/testing';

import { WeatherProxyService } from './weather-proxy.service';

describe('WeatherServiceService', () => {
  let service: WeatherProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
