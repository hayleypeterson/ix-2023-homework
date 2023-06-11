// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhQfrWTB9Y0YnTUa0KHzImauQ33W4vlSw",
  authDomain: "library-bb4c0.firebaseapp.com",
  projectId: "library-bb4c0",
  storageBucket: "library-bb4c0.appspot.com",
  messagingSenderId: "479953360738",
  appId: "1:479953360738:web:467009507c03ee763fbe3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
