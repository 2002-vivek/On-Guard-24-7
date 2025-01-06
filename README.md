# ON GUARD 24/7

**Empowering Security with Technology**

ON GUARD 24/7 is a cutting-edge security service platform designed to redefine professional security solutions. Combining robust backend technologies with responsive web and mobile interfaces, it offers seamless and secure experiences for users and administrators alike. 

---

## 🚀 Project Highlights

### 🛡 Comprehensive Security Services
- **Residential Security**: Personalized services for homeowners.
- **Site Security**: Robust protection for construction and industrial sites.
- **Event Security**: Reliable solutions for events of any scale.

### 🔒 Robust Security and Scalability
- **Role-Based Authentication**: Secure access for users and admins.
- **Scalable Architecture**: Built with modern frameworks for growth.
- **Cross-Platform Support**: Available on web and mobile platforms.

### 💼 Features Tailored for Professional Use
- **Service Request Management**: Real-time guard booking and cost calculation.
- **Admin Dashboard**: Streamlined user and service request management.
- **Dynamic Portfolio Display**: Showcasing past achievements for credibility.
- **Subscription Management**: Newsletter and alert subscriptions with email validation.
- **Contact Handling**: Database integration for user queries.

---

## 🛠 Technology Stack

**Backend**:
- NestJS (Node.js Framework)
- MongoDB (Database)
- TypeScript, JWT, Passport.js

**Web Frontend**:
- React.js, Next.js
- Responsive Design with Bootstrap and CSS Modules
- TypeScript

**Mobile Frontend**:
- Ionic Framework
- React, TypeScript
- Context API, CSS Modules

**Basic Frontend**:
- HTML, CSS, JavaScript (ES6)
- Bootstrap for styling
- Initial prototype for demonstrating basic functionality.

---

## 📂 Project Components

The platform is divided into four major components:

1. **Backend**:
   - Handles core business logic, authentication, and database interactions.
   - Built for scalability and modularity.

2. **Web Frontend**:
   - Provides a dynamic and responsive user interface for desktop users.
   - Developed with React and Next.js for server-side rendering and SEO optimization.

3. **Mobile Frontend**:
   - Designed for cross-platform mobile users.
   - Built with the Ionic Framework and React for a native-like experience.

---


## 📖 How to Run the Project

### Prerequisites

Ensure the following are installed:
- **Node.js** (v14 or later)
- **npm** or **pnpm**
- **MongoDB**
- **Ionic CLI**

### Step 1: Clone the Repository

```bash
git clone <repository_url>
cd On-Guard-24-7
```

### Step 2: Set Up Backend

1. Navigate to the `Backend` folder:
   ```bash
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env` file in the `Backend` folder with:
     ```env
     MONGODB_URI=<Your MongoDB Connection String>
     JWT_SECRET=<Your JWT Secret>
     JWT_EXPIRATION=3600
     ```
4. Start the backend server:
   ```bash
   npm run start:dev
   ```
   Accessible at `http://localhost:3000`.

### Step 3: Set Up Web Frontend

1. Navigate to the `Frontend_with_React_and_NextJs` folder:
   ```bash
   cd ../Frontend_with_React_and_NextJs
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   - Create a `.env.local` file with:
     ```env
     NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
     ```
4. Start the development server:
   ```bash
   npm run dev
   ```
   or

   ```
   pnpm dev
   ```
   Accessible at `http://localhost:3000`.

### Step 4: Set Up Mobile Frontend

1. Navigate to the `Frontend_with_Ionic` folder:
   ```bash
   cd ../Frontend_with_Ionic
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Ionic development server:
   ```bash
   ionic serve
   ```
   Accessible in a browser or connected mobile device.

### Step 5: Run Basic Frontend (Optional)

1. Navigate to the `Frontend/public` folder:
   ```bash
   cd ../Frontend/public
   ```
2. Open `index.html` in a browser to view the basic frontend.

---

## 📜 Detailed Information

For more details, explore the individual README files:
- [Backend README](./Backend/README.md): Core server-side functionalities.
- [Web Frontend README](./Frontend_with_React_and_NextJs/README.md): User interface for web users.
- [Mobile Frontend README](./Frontend_with_Ionic/README.md): Cross-platform mobile application.

---


