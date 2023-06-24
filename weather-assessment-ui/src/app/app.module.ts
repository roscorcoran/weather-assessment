import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteStateComponent } from '../components/auto-complete-state/auto-complete-state.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {HttpClientModule} from "@angular/common/http";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AppRoutingModule} from "./app-routing.module";
import {StateWeatherComponent} from "../components/state-weather/state-weather.component";
import {WeatherDisplayComponent} from "../components/weather-display/weather-display.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    AutoCompleteStateComponent,
    StateWeatherComponent,
    WeatherDisplayComponent,
  ],
  providers: [
    MatSnackBar
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
