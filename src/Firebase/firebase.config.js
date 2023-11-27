// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkT6px2h4kP-y1ehmpHOBLal5NQTuj7lM",
  authDomain: "auth-base-site.firebaseapp.com",
  projectId: "auth-base-site",
  storageBucket: "auth-base-site.appspot.com",
  messagingSenderId: "766812969353",
  appId: "1:766812969353:web:9d7ea373b2557eff602958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;
