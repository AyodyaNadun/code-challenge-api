const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const connectDB = require("./app/resources/mongodb/connection");
const errorHandler = require("./app/middleware/error");
const passport = require('passport');

// Get env configurations
dotenv.config({ path: `./app/config/${process.env.NODE_ENV}.env` });

const PORT = process.env.PORT;
const MODE = process.env.NODE_ENV;
const HOST = process.env.HOST;

// Connect to the Database
connectDB();

// Get Routes
const userRoute = require("./app/routes/user-route");
const authRoute = require("./app/routes/auth-route");
const organizationRoute = require("./app/routes/organization-route");
const ticketRoute = require("./app/routes/ticket-route");

const cors = require('cors')
const app = express();

// Use swagger to visualized and describe the structure of APIs
const expressSwagger = require('express-swagger-generator')(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

/**
 * Swagger options
 */
let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a swagger project for node server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: `${HOST}/${PORT}`,
        basePath: '/',
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "JWT authentication and authorization",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./app/routes/*.js'] //Path to the API handle folder
};
expressSwagger(options);

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Cookie parser
app.use(cookieParser());

// Dev logger
if (MODE === 'development') {
    app.use(morgan('dev'));
};

app.use('/api/v1/user', userRoute);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/organization', organizationRoute);
app.use('/api/v1/ticket', ticketRoute);

// Handle Errors
app.use(errorHandler);

app.listen( PORT, console.log(`Server is running in ${MODE} mode on port ${PORT}`) );

// for testing
module.exports = app;
