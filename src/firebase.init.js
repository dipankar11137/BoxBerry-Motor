// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-Gzb9_gVNTsSkvIqSxVxYyJ3i9-UVL4I",
  authDomain: "boxberry-motor.firebaseapp.com",
  projectId: "boxberry-motor",
  storageBucket: "boxberry-motor.appspot.com",
  messagingSenderId: "533892170770",
  appId: "1:533892170770:web:7e396df2c782090fff84cb",
  measurementId: "G-1SGY4RN0P6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;
