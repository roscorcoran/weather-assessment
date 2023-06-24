import {Component, OnInit} from '@angular/core';
import {AutoCompleteStateComponent} from "../auto-complete-state/auto-complete-state.component";
import {WeatherDisplayComponent} from "../weather-display/weather-display.component";

@Component({
  selector: 'state-weather',
  templateUrl: './state-weather.component.html',
  styleUrls: ['./state-weather.component.scss'],
  standalone: true,
  imports: [AutoCompleteStateComponent,WeatherDisplayComponent],
})

export class StateWeatherComponent {
}

