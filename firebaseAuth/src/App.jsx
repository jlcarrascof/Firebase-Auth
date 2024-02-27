// Importing the required libraries
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

// Importing the required environment variables
const apiKey = import.meta.env.VITE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;

// Initializing the Firebase app
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

// Firebase setup
const appFirebase = initializeApp(firebaseConfig);

// Firebase Authentication
const auth = getAuth(appFirebase);

// Import components

import Home from '../src/components/Home';
import Login from '../src/components/Login';

function App() {

  // Firebase Authentication
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

  return (
    <div>
      <h1>React Firebase Authentication</h1>
      {user ? <Home userEmail = {user.email} /> : <Login />}
    </div>
  )
}

export default App
