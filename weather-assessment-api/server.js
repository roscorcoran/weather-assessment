const express = require('express');
const connectDb = require("./db");
const weatherAccess = require("./weatherAccess/weatherAccessRoutes");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const {weatherProxy} = require("./weatherProxy");

const app = express();
connectDb();

app.use(express.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Weather Access REST API',
            description: "A REST API built with Express and MongoDB. This API provides a weather proxy and a log of weather proxy accesses."
        },
    },
    apis: ["./weatherAccess/weatherAccessRoutes.js", "./weatherProxy/weatherProxyRoutes.js"]
}

app.use('/weatherproxy', weatherProxy);

app.use('/weatheraccess', weatherAccess);

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(5000, () => console.log('Up and running 🚀'));