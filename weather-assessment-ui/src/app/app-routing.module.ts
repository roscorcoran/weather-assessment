import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StateWeatherComponent} from "../components/state-weather/state-weather.component";
import {WeatherProxyAccessComponent} from "../components/weather-proxy-access/weather-proxy-access.component";

const routes: Routes = [
    {path: '', redirectTo: 'state-weather', pathMatch: 'full'},
    {path: 'state-weather', component: StateWeatherComponent},
    {path: 'weather-access', component: WeatherProxyAccessComponent},
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [],
    bootstrap: []
})
export class AppRoutingModule {
}
