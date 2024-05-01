# codeflick

## How the Routing is working in the Project
    -/api/v1/problems/ping
        - because the routes start with /api
            apiRouter -> v1Router -> problemRouter ->problemController -> Service layer

# Code Practice Platform API

Welcome to the Code Practice Platform API documentation! This API is a part of a full-stack project aimed at providing a platform for users to practice coding problems similar to LeetCode. Users can solve problems, set new ones, and modify existing ones. This README provides an overview of the API functionalities, setup instructions, and other relevant details.

## Features

1. **Problem Setter**: Allows authorized users to add, delete, and modify coding problems.
2. **User Practice**: Enables users to practice coding problems and track their progress.
3. **Authentication**: Provides authentication mechanisms to secure endpoints and user data.
4. **Error Handling**: Utilizes HTTP status codes for effective error handling.
5. **Scalability**: Built using Node.js, Express.js, and MongoDB, ensuring scalability and performance.
6. **Logging**: Integrates with Azure Cosmos DB for logging API activities.
7. **Routing Mechanism**: Follows a structured routing mechanism for better organization.

## Technologies Used

- Node.js: JavaScript runtime for server-side development.
- Express.js: Web application framework for Node.js, facilitating API development.
- MongoDB: NoSQL database for storing problem and user data.
- nodemon: Development utility for automatically restarting the server during development.
- JavaScript: Programming language used for server-side logic.
- https-status-code: Utilized for standardizing HTTP status codes for responses.
- Azure Cosmos DB: NoSQL database service used for logging API activities.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.
- MongoDB should be installed and running.
- Azure Cosmos DB account should be set up with the necessary configurations.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/allaboutraj/codeflick.git
   
2. Install dependencies:
    npm install

3. The server will start running at http://localhost:3000 by default.

API Endpoints
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in an existing user.
GET /api/problems: Get all problems.
GET /api/problems/:id: Get a specific problem by ID.
POST /api/problems: Create a new problem (requires authentication).
PUT /api/problems/:id: Update an existing problem (requires authentication).
DELETE /api/problems/:id: Delete a problem (requires authentication).
POST /api/practice/:id/submit: Submit a solution for a problem (requires authentication).


Routing Mechanism
The routing mechanism follows the structure:

/api/v1/problems/ping: This route is used to check if the API is running.
Routes start with /api, handled by apiRouter.
apiRouter routes to v1Router.
v1Router routes to problemRouter.
problemRouter routes to problemController, which further interacts with the service layer.
