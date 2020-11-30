## ReaktorJuniorSpring2021

Reaktor's Junior Developer Spring 2021 pre-assignment. 

## Application

### Backend
- Express app
- Fetches the data from two different APIs.
- Combines the availability data into product objects.
- caches the data.
- Serves the client build. (In production)
- Serves the cached data for client applications from '/products' endpoint.
- Refetches the data every five minutes.

TODO: Add socket implementation to serve the updated products data to the connected clients when refetching from the APIs has resulted in changes to the cached products data.

### Client
- React app
- Fetches the products data from the backend.
- Caches the data.
- Displays the data using Material UI table.
- Refetches the data every 2,5 minutes.

## To run locally
#### backend
- Clone the repository
`git clone https://github.com/paavopoutiainen/ReaktorJuniorSpring2021.git`
- install dependencies
`npm install`
- start with automatic restart on file changes using nodemon
`npm run nodemon`

#### client
- cd to the client directory
`cd client`
- install dependencies
`npm install`
- start the dev server
`npm run start`
- Now you shoud have the application running on localhost:3000, sending requests to localhost:3001

### Build the client app
If you want to make a production build of the client application and serve it statically from the backend just:
- cd to the client directory
`cd client`
- Run the build script
`npm run build`
- Copy the build directory to the root of the project
`cd client`
`cp -r build ..`


