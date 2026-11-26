// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMO0gmv_TWitHNFrOkwIfjraMjtVFqsmw",
  authDomain: "tuneit-28b10.firebaseapp.com",
  projectId: "tuneit-28b10",
  storageBucket: "tuneit-28b10.firebasestorage.app",
  messagingSenderId: "772962291559",
  appId: "1:772962291559:web:6ebae235b89d65cb0ea9c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const _auth = getAuth(app);