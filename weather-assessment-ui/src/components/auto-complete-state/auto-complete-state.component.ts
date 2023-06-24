import {Component, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {WeatherService} from '../../services/weather/weather.service';

type State = { latitude: number; state: string; longitude: number };

const usStates: State[] = [
  {
    "state": "Alaska",
    "latitude": 61.3850,
    "longitude": -152.2683
  },
  {
    "state": "Alabama",
    "latitude": 32.7990,
    "longitude": -86.8073
  },
  {
    "state": "Arkansas",
    "latitude": 34.9513,
    "longitude": -92.3809
  },
  {
    "state": "Arizona",
    "latitude": 33.7712,
    "longitude": -111.3877
  },
  {
    "state": "California",
    "latitude": 36.1700,
    "longitude": -119.7462
  },
  {
    "state": "Colorado",
    "latitude": 39.0646,
    "longitude": -105.3272
  },
  {
    "state": "Connecticut",
    "latitude": 41.5834,
    "longitude": -72.7622
  },
  {
    "state": "Delaware",
    "latitude": 39.3498,
    "longitude": -75.5148
  },
  {
    "state": "Florida",
    "latitude": 27.8333,
    "longitude": -81.7170
  },
  {
    "state": "Georgia",
    "latitude": 32.9866,
    "longitude": -83.6487
  },
  {
    "state": "Hawaii",
    "latitude": 21.1098,
    "longitude": -157.5311
  },
  {
    "state": "Iowa",
    "latitude": 42.0046,
    "longitude": -93.2140
  },
  {
    "state": "Idaho",
    "latitude": 44.2394,
    "longitude": -114.5103
  },
  {
    "state": "Illinois",
    "latitude": 40.3363,
    "longitude": -89.0022
  },
  {
    "state": "Indiana",
    "latitude": 39.8647,
    "longitude": -86.2604
  },
  {
    "state": "Kansas",
    "latitude": 38.5111,
    "longitude": -96.8005
  },
  {
    "state": "Kentucky",
    "latitude": 37.6690,
    "longitude": -84.6514
  },
  {
    "state": "Louisiana",
    "latitude": 31.1801,
    "longitude": -91.8749
  },
  {
    "state": "Massachusetts",
    "latitude": 42.2373,
    "longitude": -71.5314
  },
  {
    "state": "Maryland",
    "latitude": 39.0724,
    "longitude": -76.7902
  },
  {
    "state": "Maine",
    "latitude": 44.6074,
    "longitude": -69.3977
  },
  {
    "state": "Michigan",
    "latitude": 43.3504,
    "longitude": -84.5603
  },
  {
    "state": "Minnesota",
    "latitude": 45.7326,
    "longitude": -93.9196
  },
  {
    "state": "Missouri",
    "latitude": 38.4623,
    "longitude": -92.3020
  },
  {
    "state": "Mississippi",
    "latitude": 32.7673,
    "longitude": -89.6812
  },
  {
    "state": "Montana",
    "latitude": 46.9048,
    "longitude": -110.3261
  },
  {
    "state": "North Carolina",
    "latitude": 35.6411,
    "longitude": -79.8431
  },
  {
    "state": "North Dakota",
    "latitude": 47.5362,
    "longitude": -99.7930
  },
  {
    "state": "Nebraska",
    "latitude": 41.1289,
    "longitude": -98.2883
  },
  {
    "state": "New Hampshire",
    "latitude": 43.4108,
    "longitude": -71.5653
  },
  {
    "state": "New Jersey",
    "latitude": 40.3140,
    "longitude": -74.5089
  },
  {
    "state": "New Mexico",
    "latitude": 34.8375,
    "longitude": -106.2371
  },
  {
    "state": "Nevada",
    "latitude": 38.4199,
    "longitude": -117.1219
  },
  {
    "state": "New York",
    "latitude": 42.1497,
    "longitude": -74.9384
  },
  {
    "state": "Ohio",
    "latitude": 40.3736,
    "longitude": -82.7755
  },
  {
    "state": "Oklahoma",
    "latitude": 35.5376,
    "longitude": -96.9247
  },
  {
    "state": "Oregon",
    "latitude": 44.5672,
    "longitude": -122.1269
  },
  {
    "state": "Pennsylvania",
    "latitude": 40.5773,
    "longitude": -77.2640
  },
  {
    "state": "Rhode Island",
    "latitude": 41.6772,
    "longitude": -71.5101
  },
  {
    "state": "South Carolina",
    "latitude": 33.8191,
    "longitude": -80.9066
  },
  {
    "state": "South Dakota",
    "latitude": 44.2853,
    "longitude": -99.4632
  },
  {
    "state": "Tennessee",
    "latitude": 35.7449,
    "longitude": -86.7489
  },
  {
    "state": "Texas",
    "latitude": 31.1060,
    "longitude": -97.6475
  },
  {
    "state": "Utah",
    "latitude": 40.1135,
    "longitude": -111.8535
  },
  {
    "state": "Virginia",
    "latitude": 37.7680,
    "longitude": -78.2057
  },
  {
    "state": "Vermont",
    "latitude": 44.0407,
    "longitude": -72.7093
  },
  {
    "state": "Washington",
    "latitude": 47.3917,
    "longitude": -121.5708
  },
  {
    "state": "Wisconsin",
    "latitude": 44.2563,
    "longitude": -89.6385
  },
  {
    "state": "West Virginia",
    "latitude": 38.4680,
    "longitude": -80.9696
  },
  {
    "state": "Wyoming",
    "latitude": 42.7475,
    "longitude": -107.2085
  }
];

@Component({
  selector: 'auto-complete-state',
  templateUrl: './auto-complete-state.component.html',
  styleUrls: ['./auto-complete-state.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
  ],
})

export class AutoCompleteStateComponent implements OnInit {
  myControl = new FormControl();
  options: State[] = usStates;
  filteredOptions: Observable<State[]> = new Observable<State[]>();

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return this._filter(value);
      }),
    );
  }

  private _filter(value: String) {
    const filterValue = typeof value == 'string' ? value?.toLowerCase() : '';

    return this.options.filter(option => {
      const filterOption = option.state.toLowerCase();
      return filterOption.includes(filterValue)
    });
  }

  updateMySelection($event: MatAutocompleteSelectedEvent) {
    const lat = $event?.option?.value?.latitude;
    const lng = $event?.option?.value?.longitude;
    if (lat && lng) {
      this.weatherService.getWeatherFromLatLng(lat, lng);
    }
  }

  getOptionText(option: State) {
    return option?.state || '';
  }
}

