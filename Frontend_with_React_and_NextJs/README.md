# Frontend with React and Next.js

This is a React and Next.js-based frontend project designed to provide a complete user interface for a security service platform, **ON GUARD 24/7**. The project integrates multiple components, pages, and features to enable user authentication, service management, and client interactions.

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
   - [Components](#components)
   - [Pages](#pages)
   - [Styles](#styles)
   - [.env](#env-file)
3. [File Descriptions](#file-descriptions)
4. [How It Works](#how-it-works)
5. [How to Run](#how-to-run)

---

## Technologies Used

- **React.js**: For creating reusable UI components.
- **Next.js**: For server-side rendering and routing.
- **TypeScript**: For type safety and better code maintainability.
- **CSS Modules**: For scoped and modular styling.
- **Bootstrap**: For responsive design and UI components.
- **JavaScript Cookies**: For session and role management.

---

## Project Structure

The project is organized into the following key directories and files:

```
Frontend_with_React_and_NextJs/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── admin/
│   │   ├── contact-us/
│   │   ├── login/
│   │   ├── requestGuards/
│   │   ├── Subscribe/
│   │   ├── Card.tsx
│   │   ├── CustomHead.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── RestrictedCard.tsx
│   │   ├── SubscribePage.tsx
│   ├── pages/
│   │   ├── admin.tsx
│   │   ├── contact_us.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   ├── portfolio.tsx
│   │   ├── requestGuards.tsx
│   │   ├── services.tsx
│   ├── styles/
├── .env
```

---

## File Descriptions

### Components Directory

This directory contains reusable React components that leverage hooks, state management, and dynamic styling to create modular and scalable UI elements. The components are grouped into logical folders based on their purpose.

#### **Admin Components**
- **UserTable.tsx**:
  - Dynamically renders a table of users with pagination and search capabilities.
  - Utilizes `useState` for tracking and managing edit/delete operations.
  - Includes prop-based callbacks (`onEdit`, `onDelete`) for interaction with the parent component.

- **UserForm.tsx**:
  - Implements a controlled form for adding or updating user information.
  - Leverages `useEffect` to pre-fill data for editing users.
  - Provides real-time input validation and triggers submission through the `onSubmit` callback.

#### **Contact-Us Components**
- **ContactForm.tsx**:
  - Designed to capture user queries and feedback.
  - Uses `useState` to handle form data and validation.
  - Displays dynamic error and success messages to enhance user interaction.

#### **Login Components**
- **LoginForm.tsx**:
  - Provides a toggleable interface for login and signup modes.
  - Validates email formats and ensures all required fields are populated.
  - Sends form data to APIs through `onLogin` and `onSignup` callbacks.

#### **RequestGuards Components**
- **CartForm.tsx**:
  - Allows users to specify the number of guards required for different services.
  - Computes total cost dynamically using `useEffect` and state management.
  - Includes submission logic through a callback (`onSubmit`) and integrates `CartItem` for modular handling.

- **CartItem.tsx**:
  - Represents individual items in a service request cart.
  - Handles increment, decrement, and direct input for quantities with real-time validation.
  - Updates parent state via a callback (`setCount`).

- **RequestTable.tsx**:
  - Renders a table displaying service requests.
  - Provides action buttons for editing and deleting requests, triggering parent callbacks.

#### **Subscribe Components**
- **SubscribeForm.tsx**:
  - Tracks and validates email input using regex.
  - Provides feedback on successful or failed subscription attempts.
  - Uses a parent callback (`onSubmit`) to handle API submission.

- **SubscribePage.tsx**:
  - Combines the subscription form with social media links for a cohesive call-to-action section.

#### **Other Components**
- **Card.tsx**:
  - Displays a portfolio item with an image and a title.
  - Accepts props for dynamic content rendering.

- **CustomHead.tsx**:
  - Configures metadata and SEO-friendly content for each page.
  - Dynamically updates the title and description via props.

- **Footer.tsx**:
  - Provides navigation and informational links in the footer section.
  - Implements semantic HTML for improved accessibility.

- **Header.tsx**:
  - Displays navigation links dynamically based on user roles and authentication state.
  - Tracks login state and toggles menu visibility using cookies and `useState`.

- **RestrictedCard.tsx**:
  - Displays restricted content overlays for items requiring special access.
  - Implements hover effects for an enhanced user experience.

---

### Pages Directory

The `pages` directory contains the main routes of the application. Each page uses various React hooks, states, and components to provide interactivity and dynamic functionality.

#### **admin.tsx**
- Uses `useState` to manage the list of users and the current user being edited.
- Fetches user data with server-side rendering using `getServerSideProps`.
- Handles user actions such as adding, editing, and deleting via API calls.
- Integrates `UserTable` and `UserForm` components for UI rendering and functionality.

#### **contact_us.tsx**
- Contains a contact form for users to submit messages.
- Uses `useState` for managing form data and error handling.
- Sends form data to the backend via a POST request.
- Includes the `SubscribePage` component to allow newsletter subscriptions directly from this page.

#### **index.tsx**
- Implements an Intersection Observer API using `useEffect` for animating elements as they appear in the viewport.
- Displays key information about the company's services and features.
- Includes links to other sections like "Contact Us" and "Services."

#### **login.tsx**
- Uses `useState` to handle form data for login and signup.
- Manages user authentication via API calls.
- Stores session tokens and user roles using cookies to handle role-based access.
- Redirects users after successful login or signup.

#### **portfolio.tsx**
- Dynamically renders a portfolio of condominiums using the `Card` component.
- Uses the `RestrictedCard` component for content restricted to authorized users.
- Showcases usage of reusable components and dynamic content rendering based on data arrays.

#### **requestGuards.tsx**
- Fetches and displays security guard requests using `getServerSideProps`.
- Manages request data with `useState` for adding, editing, and deleting.
- Uses `RequestTable` for viewing requests and `CartForm` for submitting new or updated requests.
- Implements API calls for CRUD operations on security guard requests.

#### **services.tsx**
- Details the services offered by the company, such as Residential, Event, and Site Security.
- Uses descriptive content combined with images for visual engagement.
- Includes the `SubscribePage` component for user subscription to newsletters.

---

### Styles Directory

Contains CSS modules for styling individual components and pages. Each CSS file is scoped to its corresponding component or page to avoid conflicts.

### .env File

Contains environment variables such as:
- `NEXT_PUBLIC_API_BASE_URL`: Base URL for the backend API.

---

## How It Works

### Authentication
- **Login**: Validates user credentials via an API call and sets cookies for session and role management.
- **Signup**: Registers new users through the `admin/signup` API endpoint.

### User Management
- Admin users can view, add, edit, and delete user accounts from the `admin` page.

### Service Requests
- Users can create and manage service requests for Event, Residential, and Site Security from the `requestGuards` page.

### Contact Us
- Users can submit queries or feedback through the contact form, which is validated on the client side before submission.

### Subscriptions
- The `SubscribeForm` collects user emails for newsletter subscriptions and integrates social media links for additional engagement.

### Portfolio
- Publicly accessible portfolio of condominiums, with restricted content for certain embassies.

### Navigation
- The `Header` dynamically displays navigation options based on the user's login status and roles.

---

## How to Run

To set up and run the project locally, follow these steps:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   pnpm dev
   ```

The application will be available at `http://localhost:3000` by default.

---

This README should provide a comprehensive overview of the project and its functionalities. For additional information, refer to the individual files and components.
