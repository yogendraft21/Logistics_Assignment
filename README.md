# Logistics Management System

Welcome to the Logistics Management System documentation. This system automates logistics operations for a company that manages vehicles, items, orders, and customers. Below you'll find details about the available routes and endpoints for each feature.

## Getting Started

To use the system's functionalities, make sure you have Node.js and MongoDB installed. Install the required dependencies by running:

```bash
npm install
Routes and Endpoints
Authentication
All routes except for the /customers route require authentication via a token. The token should be passed in the Authorization header as a Bearer token.

Authorization: Bearer your-token-here
Customers
GET /customers: Get a list of all customers.
GET /customers/:id: Get details of a specific customer by ID.
POST /customers: Create a new customer.
PUT /customers/:id: Update details of a customer.
DELETE /customers/:id: Delete a customer.
Items
GET /items: Get a list of all items.
GET /items/:id: Get details of a specific item by ID.
POST /items: Create a new item.
PUT /items/:id: Update details of an item.
DELETE /items/:id: Delete an item.
Delivery Vehicles
GET /vehicles: Get a list of all delivery vehicles.
GET /vehicles/:id: Get details of a specific delivery vehicle by ID.
POST /vehicles: Create a new delivery vehicle.
PUT /vehicles/:id: Update details of a delivery vehicle.
DELETE /vehicles/:id: Delete a delivery vehicle.
Orders
POST /orders: Create a new order and assign a delivery vehicle.
PUT /orders/:id/deliver: Mark an order as delivered.
Error Handling
Errors are returned with appropriate status codes and error messages in JSON format.

Logging
The application uses logging to provide information and error messages. Check the log files for more details.
