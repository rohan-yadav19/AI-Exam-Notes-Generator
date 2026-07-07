import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-5a95c.firebaseapp.com",
  projectId: "authexamnotes-5a95c",
  storageBucket: "authexamnotes-5a95c.firebasestorage.app",
  messagingSenderId: "921665817578",
  appId: "1:921665817578:web:b2c3fd7370ce2f27f90093",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
