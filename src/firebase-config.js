// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCGfOObKFPaXOIa7N4Ln9_jAZSPDyKm49E",
  authDomain: "weather-ce21e.firebaseapp.com",
  projectId: "weather-ce21e",
  storageBucket: "weather-ce21e.appspot.com",
  messagingSenderId: "841737986049",
  appId: "1:841737986049:web:b006d71f6d7163bcf42000",
  measurementId: "G-C254KP33R3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);