# Netflix Clone - A Next.js Application

## Introduction

This project is a **Netflix Clone** built with **Next.js** and **TailwindCSS** for a responsive and modern UI. The app leverages **Recoil** for state management, **TypeScript** for type safety, and integrates **Firebase Authentication** for secure user login. It fetches movie data from the **MovieDB API** to display movie listings dynamically.

## Features

- **Next.js Pages Router**: Utilizes the `pages` directory for routing, providing both server-side rendering (SSR) and static site generation (SSG) capabilities.
- **TailwindCSS**: Used for creating responsive and scalable styles, ensuring a clean and modern design.
- **Recoil for State Management**: Recoil is used to manage global state across components, making it easier to handle complex state logic.
- **Firebase Authentication**: Firebase Authentication is integrated for user login and authentication.
- **TypeScript**: The entire project is written in **TypeScript** to provide better type-checking and error prevention.
- **MovieDB API**: Fetches dynamic movie and TV show data from the **MovieDB API**.
- **Responsive Design**: Optimized for all screen sizes, providing a seamless experience on both mobile and desktop devices.

## Technologies Used

- **Next.js**: A React framework for building server-side rendered and statically generated web applications.
- **TailwindCSS**: A utility-first CSS framework used to create responsive layouts and styles.
- **Recoil**: A state management library for React.
- **Firebase**: Used for user authentication.
- **MovieDB API**: API used for fetching movie data.
- **TypeScript**: Superset of JavaScript used to ensure type safety.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/ehtashamtoor/Netflix-clone-main.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root of your project and add the following environment variables:

   ```bash
   NEXT_PUBLIC_API_KEY=your_movie_db_api_key
   NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY=your_firebase_public_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   ```

## Running the Application

To start the development server, run:

```bash
npm run dev
```

This will start the Next.js development server and open your application in the default browser at [http://localhost:3000](http://localhost:3000).

## Key Features

### 1. **Movie Data Fetching with MovieDB API**
   - The app uses the **MovieDB API** to fetch real-time movie and TV show data.
   - API used: [`https://api.themoviedb.org/3`](https://api.themoviedb.org/3)
   - Movies are dynamically displayed on the homepage with details such as title, description, and rating.

### 2. **User Authentication with Firebase**
   - Users can sign up, log in, and authenticate using **Firebase Authentication**.
   - Firebase handles secure user management, allowing for email/password authentication.

### 3. **Global State Management with Recoil**
   - Recoil is used for managing application-wide state, such as movie selections, user authentication status, and UI components visibility.
   - This simplifies state handling across different parts of the app.

### 4. **Responsive UI with TailwindCSS**
   - **TailwindCSS** ensures the app is fully responsive, providing a great user experience on both desktop and mobile devices.
   - The design is inspired by **Netflix**, giving a clean and professional look.

### 5. **TypeScript Integration**
   - The use of **TypeScript** ensures type safety throughout the project, reducing errors during development.
   - It provides autocompletion and type-checking benefits, improving developer productivity.

## Environment Variables

- **NEXT_PUBLIC_API_KEY**: Your **MovieDB API** key for fetching movie data.
- **NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY**: Public **Firebase API** key for authentication.
- **NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN**: **Firebase Authentication** domain for user login.
- **NEXT_PUBLIC_FIREBASE_PROJECT_ID**: The **Firebase project ID** for your application.

## Live Link

[**Netflix Clone Application**](https://netflix-clone-main-alpha.vercel.app/)

---

Feel free to explore the codebase and customize the application to your liking. For any questions or further details, refer to the [Next.js](https://nextjs.org/docs), [TailwindCSS](https://tailwindcss.com/docs), [Firebase Authentication](https://firebase.google.com/docs/auth), and [Recoil](https://recoiljs.org/) documentation!
