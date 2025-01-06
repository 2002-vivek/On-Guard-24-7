# On Guard 24/7 Backend

This project is the backend implementation for the "On Guard 24/7" application, which provides professional security services. The backend is developed using **NestJS** and **MongoDB** to ensure scalability, modularity, and security.

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Modules and Functionality](#modules-and-functionality)
- [Installation](#installation)
- [Running the Project](#running-the-project)

---

## Project Overview
The backend serves as the core of the "On Guard 24/7" platform, handling:
- Authentication and role-based authorization
- User management (admin functionalities)
- Handling contact form submissions
- Subscription management for updates and alerts
- Request and management of guard services

---

## Technologies Used
- **Framework**: [NestJS](https://nestjs.com/)
- **Database**: MongoDB (via [Mongoose](https://mongoosejs.com/))
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: Class-Validator
- **Others**: TypeScript, Node.js, Passport.js, Bcrypt

---

## Folder Structure
The project is organized into modules for scalability and separation of concerns:

```
Backend
|-- src
    |-- admin
    |   |-- dto
    |   |   |-- createuser.dto.ts
    |   |   |-- updateuser.dto.ts
    |   |-- schemas
    |   |   |-- user.schema.ts
    |   |-- admin.controller.ts
    |   |-- admin.module.ts
    |   |-- admin.service.ts
    |
    |-- auth
    |   |-- decorators
    |   |   |-- role.decorator.ts
    |   |-- dto
    |   |   |-- login.dto.ts
    |   |-- auth.controller.ts
    |   |-- auth.module.ts
    |   |-- auth.service.ts
    |   |-- jwt.strategy.ts
    |   |-- role.enum.ts
    |   |-- roles.guard.ts
    |
    |-- contact-us
    |   |-- schemas
    |   |   |-- contact.schema.ts
    |   |-- contactus.controller.ts
    |   |-- contactUs.Dto.ts
    |   |-- contactus.module.ts
    |   |-- contactus.service.ts
    |
    |-- requestguards
    |   |-- dto
    |   |   |-- requestGuards.dto.ts
    |   |   |-- updateRequestGuards.Dto.ts
    |   |-- schemas
    |   |   |-- requestGuards.schema.ts
    |   |   |-- service.schema.ts
    |   |-- requestGuards.controller.ts
    |   |-- requestGuards.module.ts
    |   |-- requestGuards.service.ts
    |
    |-- subscribe
    |   |-- schemas
    |   |   |-- subscribe.schema.ts
    |   |-- subscribe.controller.ts
    |   |-- subscribe.Dto.ts
    |   |-- subscribe.module.ts
    |   |-- subscribe.service.ts
    |
    |-- app.controller.ts
    |-- app.controller.spec.ts
    |-- app.module.ts
    |-- app.service.ts
    |-- main.ts
```

---

## Modules and Functionality

### 1. **Admin Module**
- **Files**:
  - `admin.controller.ts`: Handles incoming requests for user management. Supports endpoints for creating, updating, fetching, and deleting users.
  - `admin.service.ts`: Implements the business logic for user management, interacting with the `user.schema.ts` to perform CRUD operations on the database.
  - `user.schema.ts`: Defines the MongoDB schema for users, including fields for `name`, `email`, `password`, and `roles`.
  - `createuser.dto.ts`: Validates input data when creating new users.
  - `updateuser.dto.ts`: Validates input data when updating user details.
- **Functionality**:
  - Allows admins to manage user accounts.
  - Implements role-based access control to ensure only authorized actions are performed.

### 2. **Auth Module**
- **Files**:
  - `auth.controller.ts`: Handles user login requests and returns JWT tokens upon successful authentication.
  - `auth.service.ts`: Validates user credentials, generates JWT tokens, and defines the authentication logic.
  - `jwt.strategy.ts`: Extracts and validates JWT tokens from requests to secure routes.
  - `role.decorator.ts`: Custom decorator to assign roles to routes for role-based access control.
  - `roles.guard.ts`: Middleware to enforce role-based access control using the `role.decorator.ts`.
  - `role.enum.ts`: Defines available roles (`Admin`, `User`) for the platform.
  - `login.dto.ts`: Validates input data for login requests.
- **Functionality**:
  - Secures routes using JWT-based authentication.
  - Differentiates access levels between users and admins.

### 3. **Contact Us Module**
- **Files**:
  - `contactus.controller.ts`: Handles form submissions from the "Contact Us" page.
  - `contactus.service.ts`: Saves contact form data to the database and performs business logic related to contact submissions.
  - `contactUs.Dto.ts`: Validates input data for contact form submissions.
  - `contact.schema.ts`: Defines the MongoDB schema for storing contact information, including fields like `name`, `email`, `phone`, `message`, and optional `company`.
- **Functionality**:
  - Stores and processes user queries or messages submitted through the contact form.

### 4. **Subscription Module**
- **Files**:
  - `subscribe.controller.ts`: Handles subscription requests to newsletters or alerts.
  - `subscribe.service.ts`: Validates and saves subscriptions, ensuring unique email entries.
  - `subscribe.Dto.ts`: Validates input data for subscription requests.
  - `subscribe.schema.ts`: Defines the MongoDB schema for storing email subscriptions.
- **Functionality**:
  - Processes and stores user subscriptions.
  - Prevents duplicate subscriptions using unique email constraints.

### 5. **Request Guards Module**
- **Files**:
  - `requestGuards.controller.ts`: Handles CRUD operations for guard service requests. Supports endpoints for creating, updating, fetching, and deleting requests.
  - `requestGuards.service.ts`: Implements the business logic for managing guard requests.
  - `requestGuards.dto.ts`: Validates input data for creating new guard requests.
  - `updateRequestGuards.Dto.ts`: Validates input data for updating existing requests.
  - `requestGuards.schema.ts`: Defines the MongoDB schema for guard requests, including fields like `services`, `total_cost`, and `userId`.
  - `service.schema.ts`: Defines the schema for individual services in a request, including `service name`, `count of guards`, and `cost`.
- **Functionality**:
  - Allows users to request security guard services with detailed requirements.
  - Admins can view and manage all requests, while users can only access their own.

### 6. **Core Files**
- **Files**:
  - `app.module.ts`: Root module that integrates all other modules (Admin, Auth, Contact Us, Subscribe, Request Guards).
  - `app.service.ts`: Basic service for handling core application logic.
  - `main.ts`: Entry point of the application. Configures middleware, validation pipes, and starts the server.
- **Functionality**:
  - Centralizes the application's configuration and initialization.

---

## Installation

### Prerequisites
- Node.js
- MongoDB

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd Backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGODB_URI=<Your MongoDB Connection String>
     JWT_SECRET=<Your JWT Secret>
     JWT_EXPIRATION=3600
     ```

---

## Running the Project

1. Start the server:
   ```bash
   npm run start:dev
   ```
2. The application will run on `http://localhost:3000` by default.

---

