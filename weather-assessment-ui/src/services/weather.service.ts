import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, retry, catchError, switchMap, throwError} from "rxjs";
import {BehaviorSubject} from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  public weather: BehaviorSubject<any>;
  public weatherIsLoading: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    // We use a BehaviorSubject to handle weather data subscriptions and update subscribers as it is populated.
    this.weather = new BehaviorSubject({});
    this.weatherIsLoading = new BehaviorSubject(false);
  }

  private handleError(error: HttpErrorResponse) {
    this._snackBar.open(`We are sorry there was an error with your request, please try again later. Message: ${error.message}`, 'Dismiss', {
      duration: 4000,
    });

    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    this.weather.next({});
    this.weatherIsLoading.next(false);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getWeather(lat: String, lng: String): Observable<any> {
    this.weatherIsLoading.next(true);
    const weatherUrl = `http://localhost:5000/weatherproxy?lat=${lat}&lng=${lng}`;
    return this.http.get(weatherUrl)
      .pipe(retry(1), catchError(this.handleError.bind(this)));
  }

  getWeatherFromLatLng(lat: String, lng: String) {
    return this
      .getWeather(lat, lng)
      .subscribe((data: any) => {
        this.weather.next(data.data);
        this.weatherIsLoading.next(false);
      });
  }
}
