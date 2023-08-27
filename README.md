
# Logistics Management System

Welcome to the Logistics Management System documentation. This system automates logistics operations for a company that manages vehicles, items, orders, and customers. Below you'll find details about the available routes and endpoints for each feature.

## Getting Started
To use the system's functionalities, make sure you have Node.js and MongoDB installed. Install the required dependencies by running

### Install All the dependencies
```http
npm install
```


## Authentication
All routes except for the /customers route require authentication via a token. The token should be passed in the Authorization header as a Bearer token.

```http
Authorization: Bearer TOKEN (located in utils/constant.js file)
```

## API Endpoints

## Customers

#### Get a list of all customers

```http
  GET /customers
```
#### Get details of a specific customer by ID.

```http
  GET /customers/:${id}
```
#### Create a new customer.

```http
  POST /customers
```
#### Update a customer.

```http
  PUT /customers/:${id}
```
#### Delete a customer.

```http
  Delete /customers/:${id}
```
## Items

#### Get a list of all Items

```http
  GET /items
```
#### Get details of a specific item by ID.

```http
  GET /items/:${id}
```
#### Create a new item.

```http
  POST /items
```
#### Update a item.

```http
  PUT /items/:${id}
```
#### Delete a item.

```http
  Delete /items/:${id}
```
## Delivery Vehicles

#### Get a list of all Vehicles

```http
  GET /Vehicles
```
#### Get details of a specific Vehicle by ID.

```http
  GET /Vehicles/:${id}
```
#### Create a new Vehicle.

```http
  POST /Vehicles
```
#### Update a Vehicle.

```http
  PUT /Vehicles/:${id}
```
#### Delete a Vehicle.

```http
  Delete /Vehicles/:${id}
```
## Orders

### Create a new order and assign a delivery vehicle.

```http
  POST /orders
```
### Mark an order as delivered.

```http
  PUT /orders/:id/deliver
```

## Error Handling
Errors are returned with appropriate status codes and error messages in JSON format.

## Logging
The application uses logging to provide information and error messages. Check the log files for more details.