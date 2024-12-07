# CRUD Store

## Live Link:
https://crud-store-5e285.web.app/

## Server Vercel Link:
https://crud-store-server.vercel.app/

## Overview
CRUD Store is a web application built with a React-based frontend and an Express.js-based backend. The application allows users to perform Create, Read, Update, and Delete (CRUD) operations on stored data. This project is divided into two parts: the **frontend** and the **backend**.

## Frontend
The frontend is developed using modern React features and tools. It includes the following:

- **Technologies**: React, React Router DOM, Firebase, TailwindCSS, DaisyUI, and Vite for development.
- **Scripts**:
  - `dev`: Runs the development server using Vite.
  - `build`: Builds the project for production.
  - `lint`: Checks the code for linting errors.
  - `preview`: Previews the production build.

### Dependencies
The project relies on several third-party libraries:

- `firebase`: Used for backend integrations.
- `flowbite-react`: Provides UI components.
- `react`: A JavaScript library for building user interfaces.
- `react-awesome-reveal`: Provides animation utilities.
- `react-dom`: React DOM bindings.
- `react-icons`: Icon components for React.
- `react-router-dom`: Enables routing within the application.
- `react-tooltip`: Displays tooltips in the UI.
- `sweetalert2`: A library for showing alerts.
- `swiper`: A modern slider library.

### Dev Dependencies

- `@vitejs/plugin-react`: Vite plugin for React.
- `autoprefixer`: Automatically adds vendor prefixes to CSS rules.
- `tailwindcss`: A utility-first CSS framework.
- `eslint`: Ensures code consistency.
- `daisyui`: UI components for TailwindCSS.

### Setup

1. Navigate to the `crud-store-client` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the application in your browser at `http://localhost:5173`.

### Files
- **index.html**: The entry point of the frontend application.
- **package.json**: Lists the dependencies and scripts for the frontend.

## Backend
The backend is built using Node.js with Express.js as the framework. It uses MongoDB for data storage and includes the following:

- **Technologies**: Express.js, MongoDB, and Dotenv for environment variables.
- **Scripts**:
  - `start`: Runs the backend server.
  - `test`: Placeholder for testing scripts.

### Dependencies
The backend includes the following libraries:

- `express`: A web application framework for Node.js.
- `mongodb`: The official MongoDB driver.
- `dotenv`: Loads environment variables.
- `cors`: Enables Cross-Origin Resource Sharing.

### Setup

1. Navigate to the `crud-store-server` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run start
   ```
4. The backend will run on `http://localhost:3000` by default.

### Files
- **package.json**: Lists the dependencies and scripts for the backend.

## Usage
1. Start the backend server first by running `npm run start` in the `crud-store-server` directory.
2. Start the frontend by running `npm run dev` in the `crud-store-client` directory.
3. Open `http://localhost:5173` to access the application in your browser.

## License
This project is licensed under the ISC License.
