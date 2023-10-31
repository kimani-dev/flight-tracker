# Flight Tracker Backend

This branch contains the backend code for the Flight Tracker application. It is responsible for managing data and communication with the database. The backend is built with Node.js, and MongoDB.

## Prerequisites

Before running the backend server, ensure you have the following software installed:

- Node.js
- MongoDB

## Installation

1. Clone this repository.
2. Navigate to the backend directory.
3. Install dependencies.

## Configuration

Before starting the server, make sure to configure the environment variables. Create a `.env` file in the root directory and define the following variables:

MONGO_URI=your_mongodb_connection_uri
PORT=your_preferred_port

## Database Setup

1. Ensure MongoDB is installed and running.
2. The server will automatically create the necessary collections and indexes on first startup.

## Usage

To start the backend server, use the following command:

npm run start

The server will run at the port specified in your `.env` file.

## API Endpoints

- `/flights`: Handles flight data.
- `/airlines`: Manages airline information.

You can find detailed information about the available API endpoints in the source code.

## Contributing

Feel free to contribute to the development of the Flight Tracker application. You can create a pull request or open an issue if you find any problems.

## License

This project is licensed under the MIT License.
