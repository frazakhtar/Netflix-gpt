// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4jOQnSfjEFzVi1TNv85zSAVQ1Y72hrCw",
  authDomain: "netflixgpt-84905.firebaseapp.com",
  projectId: "netflixgpt-84905",
  storageBucket: "netflixgpt-84905.firebasestorage.app",
  messagingSenderId: "6468224912",
  appId: "1:6468224912:web:df505e9e3c5aef0d0cd515",
  measurementId: "G-Y67THEHT62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();