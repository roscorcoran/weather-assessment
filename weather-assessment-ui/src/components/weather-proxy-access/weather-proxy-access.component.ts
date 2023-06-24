import { Component } from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {DatePipe} from "@angular/common";
@Component({
  selector: 'weather-proxy-access',
  templateUrl: './weather-proxy-access.component.html',
  styleUrls: ['./weather-proxy-access.component.scss'],
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    DatePipe
  ],
})
export class WeatherProxyAccessComponent {
  public weather: any;
  public isLoading: boolean;
  constructor(public weatherService: WeatherService) {
    this.isLoading = false;
  }
  ngOnInit() {
    // this
    //   .weatherService
    //   .weatherIsLoading
    //   .subscribe((isLoading)=> {
    //     this.isLoading = isLoading;
    //   });
    // this
    //   .weatherService
    //   .weather
    //   .subscribe((data)=> {
    //     this.weather = data;
    //   });
  }
}
