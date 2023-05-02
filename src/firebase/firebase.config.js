// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFr12FAm8YhwrP4HePcmFp6Lyx4ZSzPMQ",
  authDomain: "kitchen-whiz.firebaseapp.com",
  projectId: "kitchen-whiz",
  storageBucket: "kitchen-whiz.appspot.com",
  messagingSenderId: "7306955760",
  appId: "1:7306955760:web:90df83ff1c59b4ed31eb35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
