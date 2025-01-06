# ON GUARD 24/7 - Frontend Project

## Overview
ON GUARD 24/7 is a security service platform providing Residential, Site, and Event security services. This frontend project is designed to deliver a seamless user experience with a visually appealing and interactive interface. It enables users to explore services, book guards, view portfolios, and manage their profiles.

## Project Structure
```
Frontend/public/
├── css/              # Contains all the CSS files for styling
├── html/             # HTML files for individual pages
├── images/           # Images used throughout the project
├── js/               # JavaScript files for interactivity
└── index.html        # Main entry point of the project
```

## Technology Stack
- **HTML5**: Structuring web content
- **CSS3**: Styling the project
- **JavaScript (ES6)**: Adding interactivity
- **Bootstrap 5**: Responsive design and components

---

## Detailed Description of Files and Folders

### `index.html`
- **Purpose**: Acts as the home page of the website.
- **Functionality**:
  - Highlights key services (Residential, Site, Event Security).
  - Provides sections for "Who Are We," "Why Choose Us," and "Quality Assurance."
  - Includes a contact section for direct communication.
  - Allows users to subscribe to newsletters and follow social media.

### `css/`
Contains CSS files for styling each page:
- **`Home.css`**: Styles the main page, including navigation, services section, and quality assurance.
- **`services.css`**: Styles the services page with detailed layouts for Residential, Event, and Site Security.
- **`contact-us.css`**: Customizes the Contact Us form for better user experience.
- **`portfolio.css`**: Defines the layout and visuals of the portfolio page.
- **`requestGuards.css`**: Styles for the guard request page, including tables and forms.
- **`admin.css`**: Handles admin-specific pages like user management.

### `html/`
HTML files for individual sections of the website:
- **`login.html`**: User authentication (Login and Sign-Up pages).
- **`services.html`**: Lists all security services with details and images.
- **`contact-us.html`**: A form to collect user queries and contact details.
- **`portfolio.html`**: Displays past projects and achievements with images.
- **`requestGuards.html`**: Allows users to book security services.
- **`admin.html`**: Admin dashboard for managing users and requests.

### `images/`
- Contains all images used across the website.
- **Subfolders**:
  - `Header/`: Navigation bar icons.
  - `Home/`: Home page visuals (e.g., security logos, quality images).
  - `Portfolio/`: Images for the portfolio page.
  - `RequestGuards/`: Guard-specific visuals (e.g., site security).
  - `Footer/`: Social media icons.

### `js/`
JavaScript files for interactivity:
- **`Home.js`**:
  - Handles dynamic content loading and animations for home page sections.
  - Enables subscription functionality.
  - Manages navigation bar behavior.
- **`services.js`**:
  - (Planned) Logic for interacting with services, possibly enabling dynamic filtering.
- **`contact-us.js`**:
  - Validates and submits the contact form.
  - Sends user data to the server via a POST request.
- **`portfolio.js`**:
  - (Planned) Handles dynamic display of portfolio items.
- **`requestGuards.js`**:
  - Manages booking requests.
  - Updates total cost based on user inputs.
- **`admin.js`**:
  - Fetches and displays user data for admin management.
  - Handles user creation, editing, and deletion.

---

## Key Functionalities
1. **Dynamic Navigation Bar**:
   - Changes based on user role (admin or regular user).
   - Features a responsive hamburger menu.
2. **User Authentication**:
   - Login and sign-up functionality.
   - JWT-based role management.
3. **Guard Booking System**:
   - Allows users to select and book specific guards (Event, Residential, Site).
   - Real-time cost calculation.
4. **Admin Panel**:
   - Admin can manage users and requests.
   - User details are editable, deletable, and fetchable from a mock API.
5. **Interactive Animations**:
   - Smooth scrolling and content fade-ins.
   - Highlights elements when they appear in the viewport.
6. **Newsletter Subscription**:
   - Allows users to subscribe to updates.
   - Validates email before submission.

---

## How It Works
1. **Navigation**:
   - Users can navigate to different sections via the navigation bar.
   - Mobile-friendly design with a hamburger menu.
2. **Interactivity**:
   - JavaScript manages DOM updates for animations, user input validation, and data submission.
3. **Form Validation**:
   - Contact and booking forms validate user input before submission.
4. **API Integration**:
   - Admin and guard booking pages communicate with a mock API (`localhost:3000`) for CRUD operations.



---

## How to Run the Project
1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. Ensure that the local server for API requests is running (`localhost:3000`).


