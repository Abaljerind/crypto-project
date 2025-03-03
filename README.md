# Crypto Project

Crypto Project is a web application built with React.js (Vite) and Tailwind CSS that allows users to sign up, sign in, and manage their favorite cryptocurrency watchlist. The app supports dark mode and is powered by Firebase for authentication and database management.

## Features

- **User Authentication**: Sign up and sign in using Firebase Authentication.
- **Dark Mode**: Toggle between light and dark mode for better user experience.
- **Favorite Cryptos**: Add and manage favorite cryptocurrencies in a personalized watchlist.
- **Real-time Database**: Store user data securely using Firebase Firestore.
- **Responsive Design**: Fully optimized for mobile and desktop screens.

## Technologies Used

- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Backend**: Firebase Authentication, Firestore Database
- **Deployment**: Firebase Hosting

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/crypto-project.git
   cd crypto-project
   ```

2. Install dependencies:

   ```bash
   yarn
   ```

3. Set up Firebase:

   - Create a Firebase project in [Firebase Console](https://console.firebase.google.com/).
   - Enable Firebase Authentication (Email/Password sign-in method).
   - Create a Firestore database.
   - Get your Firebase configuration and create a `.env` file:
     ```env
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

4. Start the development server:

   ```bash
   yarn dev
   ```

## Deployment

To deploy the project to Firebase Hosting:

1. Build the project:

   ```bash
   yarn build
   ```

2. Install Firebase CLI (if not installed):

   ```bash
   yarn add -g firebase-tools
   ```

3. Login to Firebase:

   ```bash
   firebase login
   ```

4. Initialize Firebase Hosting:

   ```bash
   firebase init
   ```

   - Select "Hosting"
   - Choose the Firebase project
   - Set `dist` as the public directory
   - Configure as a single-page app (SPA): **Yes**

5. Deploy:

   ```bash
   firebase deploy
   ```

## License

This project is licensed under the MIT License.

## Author

Created by [AbalJerind](https://github.com/Abaljerind)
Live Site [crypto-project](https://cryptobase-010325.web.app)
Github [AbalJerind](https://github.com/Abaljerind/crypto-project)
