# Code challenge API

## **Used Technologies**
#
* #### Node js (Express Framework)
* #### MongoDB
* #### Passport js - For Authentication/Authorization
* #### Swagger - For API documentation

## **Installation**
#
* #### Used node version - 12.13.1 
* #### Used npm version - 6.12.1
* #### Install node modules
>$ npm install

## **Run the project**
#
All environment variables placed on .env files. 
* ```development.env``` - Setup development environment variables.
* ```staging.env``` - Setup testing environment variables.
* ```production.env``` - Setup production environment variables.

* #### PAGE_LIMIT defines records per page.

### Before start the project need to run migration files to seed data to the database.
* In development environment
> $ npm run dev-migrate:up
* In development environment
> $ npm run staging-migrate:up
* In development environment
> $ npm run prod-migrate:up

### Then execute the below command to run the project
* In development environment
> $ npm run dev
* In development environment
> $ npm run staging
* In development environment
> $ npm run prod
#
## **Testing**
#
* #### Test modules - mocha and chai
* #### Command to execute the testing
> $ npm test 
#
## **API Documentation**
#
#### All APIs documented with swagger. See here
* http://localhost:3001/api-docs