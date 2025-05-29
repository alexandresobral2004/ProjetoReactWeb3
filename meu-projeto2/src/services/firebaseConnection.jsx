


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXqDbtyVKWl7xLGW6fjWqOuDBaRAhsX38",
  authDomain: "web3ead-5ca41.firebaseapp.com",
  projectId: "web3ead-5ca41",
  storageBucket: "web3ead-5ca41.firebasestorage.app",
  messagingSenderId: "365617359146",
  appId: "1:365617359146:web:f2baa7d0a48b470ae41653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);

export { auth }
export { db }