import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {retry, catchError, switchMap, throwError, Subscription} from "rxjs";
import {BehaviorSubject} from 'rxjs';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
})
export class WeatherProxyAccessService {
  public weatherProxyAccess: BehaviorSubject<any>;
  public weatherProxyAccessIsLoading: BehaviorSubject<boolean>;

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    // We use a BehaviorSubject to handle weatherProxyAccess data subscriptions and update subscribers as it is populated.
    this.weatherProxyAccess = new BehaviorSubject({});
    this.weatherProxyAccessIsLoading = new BehaviorSubject(false);
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
    this.weatherProxyAccess.next({});
    this.weatherProxyAccessIsLoading.next(false);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getWeatherProxy(): Subscription {
    this.weatherProxyAccessIsLoading.next(true);
    const weatherProxyAccessUrl = `http://localhost:5000/weatheraccess`;
    return this.http.get(weatherProxyAccessUrl)
      .pipe(retry(1), catchError(this.handleError.bind(this)))
      .subscribe((data: any) => {
        this.weatherProxyAccess.next(data.data);
        this.weatherProxyAccessIsLoading.next(false);
      });
  }
}
