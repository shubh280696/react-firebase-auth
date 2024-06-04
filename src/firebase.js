// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from  'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVdUMTtAaqSffg9Oi8kvxdP3ybfm1O3AM",
  authDomain: "react-firebase-auth-yt.firebaseapp.com",
  projectId: "react-firebase-auth-yt",
  storageBucket: "react-firebase-auth-yt.appspot.com",
  messagingSenderId: "729206206249",
  appId: "1:729206206249:web:8a6405c09eb29f8db69138"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)