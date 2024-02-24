// Importing the required libraries
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Importing the required environment variables
const apiKey = process.env.REACT_APP_API_KEY;
const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const projectId = process.env.REACT_APP_PROJECT_ID;
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
const appId = process.env.REACT_APP_APP_ID;

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

import Home from './components/Home';
import Login from './components/Login';

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
      {user ? <Home /> : <Login />}
    </div>
  )
}

export default App
