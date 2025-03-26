// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS1nQOH7AvqM4WWN0jdwo8QH59MFVm7zI",
  authDomain: "auth-infinity-war.firebaseapp.com",
  projectId: "auth-infinity-war",
  storageBucket: "auth-infinity-war.firebasestorage.app",
  messagingSenderId: "569084497115",
  appId: "1:569084497115:web:ac8431cf865189039e50fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;