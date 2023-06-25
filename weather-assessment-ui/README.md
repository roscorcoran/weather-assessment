# WeatherAssessmentUi

## Development server
First run:

``yarn install``

then

``yarn dev``

This will run the server and bind to port 4200 by default.

Navigate to `http://localhost:4200/`.

The default route is:

http://localhost:4200/state-weather

The route to view the weather access proxy: 

http://localhost:4200/weather-access

## Running unit tests

Some test suites are currently skipped (xdescribe). Most tests were written in [weather-display.component.spec.ts](src/components/weather-display/weather-display.component.spec.ts)

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).






## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
