# Frontend with Ionic Project

This folder contains the source code for a frontend application built using the Ionic framework. The project is structured to ensure scalability, maintainability, and ease of development. It integrates modern frontend development practices, context-based state management, and API-driven functionalities.

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Structure](#project-structure)
3. [File/Folder Descriptions](#filefolder-descriptions)
    - [Components](#components)
    - [Pages](#pages)
    - [Providers](#providers)
    - [Styles](#styles)
    - [Theme](#theme)
    - [App.tsx](#apptsx)
    - [main.tsx](#maintsx)
4. [Functionality Overview](#functionality-overview)
5. [Running the Project](#running-the-project)
6. [API Integration](#api-integration)


## Technologies Used

- **Ionic Framework**: For building the hybrid mobile and web application.
- **React**: Used as the primary library for building components.
- **TypeScript**: Provides type safety and enhances development experience.
- **Context API**: For managing application-level state.
- **CSS Modules**: For component-specific styling.

## Project Structure

```plaintext
.
├── src
│   ├── components
│   │   ├── Portfolio
│   │   │   ├── Card.tsx
│   │   │   ├── RestrictedCard.tsx
│   │   ├── requestGuards
│   │   │   ├── CartForm.tsx
│   │   │   ├── CartItem.tsx
│   │   │   ├── RequestTable.tsx
│   │   ├── Subscribe
│   │   │   ├── SubscribeForm.tsx
│   │   │   ├── SubscribePage.tsx
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── LoginForm.tsx
│   ├── pages
│   │   ├── login
│   │   │   ├── Login.tsx
│   │   ├── utilities
│   │   │   ├── Authentication.tsx
│   │   ├── contactus.tsx
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   ├── requestGuards.tsx
│   │   ├── Services.tsx
│   │   ├── UserContext.tsx
│   ├── providers
│   │   ├── AuthenticationProvider.tsx
│   ├── styles
│   ├── theme
│   ├── App.tsx
│   ├── main.tsx
```

### File/Folder Descriptions

#### `components`
- **`Portfolio`**:
  - `Card.tsx`: Displays a card with an image and heading. Implements React functional components and `props` for reusability.
  - `RestrictedCard.tsx`: Similar to `Card.tsx`, but includes an overlay indicating restricted content. Utilizes `useState` for dynamic UI rendering.

- **`requestGuards`**:
  - `CartForm.tsx`: Handles form input for requesting guards using `useState` for managing form state and `useEffect` for computing total cost dynamically.
  - `CartItem.tsx`: Displays individual items in the request cart. Utilizes `props` for dynamic item rendering and `useState` for quantity management.
  - `RequestTable.tsx`: Displays a table with details of guard requests and actions (edit/delete). Uses `props` for passing data and handlers for edit/delete functionality.

- **`Subscribe`**:
  - `SubscribeForm.tsx`: Handles user subscription form with validation using `useState` for input handling and state management.
  - `SubscribePage.tsx`: A page that integrates `SubscribeForm` and displays social media links.

- **Other Components**:
  - `ContactForm.tsx`: Form for users to submit their contact details and messages. Validates user input with `useState` and displays errors dynamically.
  - `Footer.tsx`: Footer section with navigational links. Uses Ionic Grid system for responsive layouts.
  - `Header.tsx`: Header section with navigation and login/logout functionality. Manages state using `useContext` for authentication.
  - `LoginForm.tsx`: Handles login and signup form functionality with toggle views for login/signup states. Implements `useState` for managing user inputs.

#### `pages`
- **`login`**:
  - `Login.tsx`: Combines `LoginForm` with authentication handlers. Utilizes `useHistory` for navigation after authentication. Integrates API calls from `Authentication.tsx` to handle login and signup using `fetch` and state updates via `useContext`.

- **`utilities`**:
  - `Authentication.tsx`: Contains API calls for login and signup functionalities using `fetch`. Provides reusable functions for authentication-related tasks like setting tokens and roles.

- **Main Pages**:
  - `contactus.tsx`: Contact Us page integrating `ContactForm`. Implements asynchronous API calls to send user-submitted messages. Uses error handling and displays success/error messages dynamically.
  - `Home.tsx`: Serves as the landing page with multiple sections like "Who Are We?", "Why Choose Us?", and "Quality Assurance". Implements `useEffect` with an Intersection Observer API for smooth animations and lazy loading of sections. Contains navigational buttons for other services.
  - `Portfolio.tsx`: Displays a categorized portfolio of projects using `Card` and `RestrictedCard` components. Embassies section includes restricted content with overlays, and all data is rendered dynamically using arrays.
  - `requestGuards.tsx`: A key functionality page where users (or admins) can request, edit, or delete guard services. Utilizes `useState` for form management, `useEffect` for API integration, and `useContext` for authentication and role-based access control. Integrates `CartForm` and `RequestTable` for seamless user interaction.
  - `Services.tsx`: A detailed page describing available services (e.g., Residential Security, Event Security, and Site Security). Uses Ionic Grid for responsive layouts and lists key features of each service dynamically.
  - `UserContext.tsx`: Implements React's Context API to manage global state related to user authentication, including roles, tokens, and logout functionality. Provides methods to update state from anywhere in the application.

#### `providers`
- **`AuthenticationProvider.tsx`**: Provides authentication context for managing logged-in state and logout functionality using cookies. Ensures persistent authentication across page reloads by checking cookies during the `useEffect` lifecycle.

#### `styles`
- Contains CSS module files for styling individual components/pages, ensuring modular and scoped styling.


#### `App.tsx`
- The root of the application. Manages routes using `IonReactRouter` and integrates context providers like `UserProvider` and `AuthenticationProvider`. Implements `IonTabs` for navigation and conditionally renders tabs based on authentication state using `useContext`.

#### `main.tsx`
- Entry point of the application. Initializes React and renders the `App` component. Uses `React.StrictMode` to highlight potential problems in the app.

## Functionality Overview

1. **Authentication**:
   - Users can log in or sign up.
   - The app manages authentication state using cookies and `UserContext`.

2. **Home Page**:
   - Displays an overview of the services and company information.

3. **Portfolio**:
   - Displays projects categorized as condominiums and embassies using `Card` components.

4. **Request Guards**:
   - Allows users to request security guards for various services.
   - Admin users can manage requests via edit and delete actions.

5. **Services**:
   - Provides detailed information about the services offered.

6. **Contact Us**:
   - Users can contact the company by submitting a form.

7. **Subscription**:
   - Users can subscribe to newsletters and follow the company on social media.

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   ionic serve
   ```

## API Integration
- The app interacts with backend APIs hosted at `http://localhost:3000` for features like login, signup, contact submissions, and guard requests.

