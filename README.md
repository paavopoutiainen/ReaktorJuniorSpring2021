## ReaktorJuniorSpring2021

Reaktor's Junior Developer Spring 2021 pre-assignment. 

## Application

### Backend
- Express app
- Fetches the data from two different APIs.
- Combines the availability data into product objects.
- caches the data.
- Serves the client build.
- Serves the cached data for client applications from '/products' endpoint.
- Refetches the data every five minutes.

TODO: Add socket implementation to serve the updated products data to the connected clients when refetching from the APIs has resulted in changes to the cached products data.

### Client
- React app
- Fetches the products data from the backend.
- Caches the data.
- Displays the data using Material UI table.
- Refetches the data every 2,5 minutes.
