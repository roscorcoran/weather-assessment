import { Component } from '@angular/core';
import {WeatherService} from '../../services/weather.service';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
})
export class WeatherDisplayComponent {
  public weather: any;
  public isLoading: boolean;
  constructor(public weatherService: WeatherService) {
    this.isLoading = false;
  }
  ngOnInit() {
    this
      .weatherService
      .weatherIsLoading
      .subscribe((isLoading)=> {
        this.isLoading = isLoading;
      });
    this
      .weatherService
      .weather
      .subscribe((data)=> {
        this.weather = data;
      });
  }
}
