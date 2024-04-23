// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk6cEVBbMZu8xmZqK0l0umsp2Py0bawjo",
  authDomain: "coffee-store-af18b.firebaseapp.com",
  projectId: "coffee-store-af18b",
  storageBucket: "coffee-store-af18b.appspot.com",
  messagingSenderId: "185748871348",
  appId: "1:185748871348:web:4d6c8cdcaa17a162119fe1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;