import { Component } from '@angular/core';
import {WeatherService} from '../../services/weather.service';
@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
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
        console.log('data', data);
        this.weather = data;
      });
  }
}
