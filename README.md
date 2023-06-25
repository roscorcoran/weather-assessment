# weather-assessment
## Project Brief
Build a 3-
tier application from scratch using Angular, Node.js and a DB. Your task is
to create an application that displays real-time weather, forecast, and air
pollution data for state capitals in the USA using the open-source weather
API https:/open-meteo.com/ to pull data the real time. The Angular UI
should consume a REST API specified with OpenAPI3 and implemented
with Node.js. The application should maintain a history of lookups done
using the app that can be retrieved and viewed in the UI.

## Built With
- Node: `v18.16.0`
- Yarn: `1.22.17`
- Angular `16.1.0`
- Express `4.18.2`

## Mongo DB
- A Mongo DB URL can be set in the .env file of the project, it will create the table 'test'.
- Other-wise you can provide me your IP and I can whitelist it in the instance.

## Angular UI
- View the [weather-assessment-ui/README.md](weather-assessment-ui/README.md) located in weather-assessment-ui folder to build/run/test
- The `ng new ...` command was used to bootstrap the UI

## Node/Mongo Backend
- View the [weather-assessment-api/Readme.md](weather-assessment-api/Readme.md) located in weather-assessment-api folder to build/run/test

- A tutorial was followed for the boilerplate for the API portion:

https://dev.to/mikefmeyer/build-a-node-js-express-rest-api-with-mongodb-and-swagger-3de9

## Improvements
- Expand the tests on the UI and create tests on the API
- Improve the approach to SCSS structure/themes
- Improve use of swagger/open-api
- Error handling in both apps can be improved