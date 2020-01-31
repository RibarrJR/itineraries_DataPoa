# Itinerários Data Poa

An application that helps users retrace the entire route of the bus and minibus line using data obtained from the DATAPOA API

## Get the Code Front-end
```
git clone https://github.com/RibarrJR/itineraries_DataPoa

cd itineraries_DataPoa/itineraries 

npm i

```
## Get the Code Back-end

```
git clone https://github.com/RibarrJR/itineraries_DataPoa

cd itineraries_DataPoa/api

npm i

```
## Development server Front-end

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server Back-End

Run `nodemon server.js` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Obseravations

As the responses of the requests were small, I saw no need to use a BFF in Node.Js to serve the application and I did all the logic of the paginator and requests in angular.