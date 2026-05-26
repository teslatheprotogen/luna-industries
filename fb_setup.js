import dotenv from 'dotenv';
dotenv.config()

const theAPIkey = import.meta.env.VITE_APIkey;
const thedatabaseURL = import.meta.env.VITE_DATABASE_URL;
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: theAPIkey,
  authDomain: "europa-starships.firebaseapp.com",
  databaseURL: thedatabaseURL,
  projectId: "europa-starships",
  storageBucket: "europa-starships.firebasestorage.app",
  messagingSenderId: "649670901132",
  appId: "1:649670901132:web:169349a463ff88b5fd2aa9",
  measurementId: "G-QWCJPPL3DV"
};

// Initialize Firebase




firebase.initializeApp(firebaseConfig);