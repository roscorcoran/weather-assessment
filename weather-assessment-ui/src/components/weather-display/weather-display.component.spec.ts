import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {WeatherDisplayComponent} from './weather-display.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {By} from "@angular/platform-browser";
import {WeatherService} from "../../services/weather/weather.service";
import {BehaviorSubject, of} from "rxjs";

describe('WeatherDisplayComponent', () => {
  const weatherResponse = {
    "success": true,
    "data": {
      "latitude": 10,
      "longitude": 10.875,
      "generationtime_ms": 0.4559755325317383,
      "utc_offset_seconds": 0,
      "timezone": "GMT",
      "timezone_abbreviation": "GMT",
      "elevation": 424,
      "daily_units": {
        "time": "iso8601",
        "weathercode": "wmo code",
        "temperature_2m_max": "°C",
        "temperature_2m_min": "°C",
        "precipitation_sum": "mm"
      },
      "daily": [
        {
          "time": "2023-06-25",
          "weathercode": 95,
          "temperature_2m_max": 28.7,
          "temperature_2m_min": 22.6,
          "precipitation_sum": 7.6
        },
        {
          "time": "2023-06-26",
          "weathercode": 96,
          "temperature_2m_max": 26.4,
          "temperature_2m_min": 23,
          "precipitation_sum": 8.9
        },
        {
          "time": "2023-06-27",
          "weathercode": 3,
          "temperature_2m_max": 29.4,
          "temperature_2m_min": 22.9,
          "precipitation_sum": 0
        },
        {
          "time": "2023-06-28",
          "weathercode": 3,
          "temperature_2m_max": 29.6,
          "temperature_2m_min": 23.1,
          "precipitation_sum": 0
        },
        {
          "time": "2023-06-29",
          "weathercode": 3,
          "temperature_2m_max": 30.5,
          "temperature_2m_min": 23,
          "precipitation_sum": 0
        },
        {
          "time": "2023-06-30",
          "weathercode": 80,
          "temperature_2m_max": 30.1,
          "temperature_2m_min": 23.7,
          "precipitation_sum": 5.7
        },
        {
          "time": "2023-07-01",
          "weathercode": 3,
          "temperature_2m_max": 29.7,
          "temperature_2m_min": 23.5,
          "precipitation_sum": 1.5
        }
      ]
    }
  }
  let component: WeatherDisplayComponent;
  let fixture: ComponentFixture<WeatherDisplayComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let mockWeatherService;
  describe('WeatherDisplayComponent has loaded', () => {
    beforeEach(() => {
      mockWeatherService = {
        weatherIsLoading: new BehaviorSubject<boolean>(false),
        weather: new BehaviorSubject<any>(weatherResponse.data),
      }

      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,],
        providers: [HttpClientModule, MatSnackBar,
          {provide: WeatherService, useValue: mockWeatherService},
        ]
      });
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
      fixture = TestBed.createComponent(WeatherDisplayComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', async () => {
      expect(component).toBeTruthy();
    });

    it(`should not have the spinner element`, async () => {
      const element = fixture.debugElement.query(By.css('mat-spinner'));
      expect(element).toBeFalsy();
    });

    it(`should have the mat-card element`, async () => {
      const element = fixture.debugElement.query(By.css('mat-card'));
      expect(element).toBeTruthy();
    });

    it(`should display the data provided from the service`, async () => {
      const element = fixture.debugElement.query(By.css('.weather-card-detail'));
      // addItemDebugElement = componentFixture
      expect(element.nativeElement.textContent).toBe('Rain: 7.6');
    });
  })

  describe('WeatherDisplayComponent has not loaded', () => {
    beforeEach(() => {
      mockWeatherService = {
        weatherIsLoading: new BehaviorSubject<boolean>(true),
        weather: new BehaviorSubject<any>(weatherResponse.data),
      }

      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,],
        providers: [HttpClientModule, MatSnackBar,
          {provide: WeatherService, useValue: mockWeatherService},
        ]
      });
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
      fixture = TestBed.createComponent(WeatherDisplayComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it(`should have the spinner element`, async () => {
      const element = fixture.debugElement.query(By.css('mat-spinner'));
      expect(element).toBeTruthy();
    });

    it(`should not have the mat-card element`, async () => {
      const element = fixture.debugElement.query(By.css('mat-card'));
      expect(element).toBeFalsy();
    });
  })
});
