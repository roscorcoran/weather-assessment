import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import {CommonModule, DatePipe} from "@angular/common";
import {WeatherProxyAccessService} from "../../services/weather-proxy-access/weather-proxy-access.service";
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'weather-proxy-access',
  templateUrl: './weather-proxy-access.component.html',
  styleUrls: ['./weather-proxy-access.component.scss'],
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    MatCardModule,
    DatePipe,
    CommonModule,
    MatTableModule,
  ],
})
export class WeatherProxyAccessComponent {
  public weatherProxyAccess: any;
  public isLoading: boolean;
  constructor(public weatherProxyAccessService: WeatherProxyAccessService) {
    this.isLoading = false;
  }
  displayedColumns: string[] = ['createdAt', 'url'];
  ngOnInit() {
    this
      .weatherProxyAccessService
      .weatherProxyAccessIsLoading
      .subscribe((isLoading)=> {
        this.isLoading = isLoading;
      });
    this
      .weatherProxyAccessService
      .weatherProxyAccess
      .subscribe((data)=> {
        this.weatherProxyAccess = data;
      });
    this
      .weatherProxyAccessService
      .getWeatherProxy();
  }
}
