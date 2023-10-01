// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwJ00DbYLyn-optAtM6q7wXCEXWFMNNq8",
  authDomain: "fire-base-react-router.firebaseapp.com",
  projectId: "fire-base-react-router",
  storageBucket: "fire-base-react-router.appspot.com",
  messagingSenderId: "744779897540",
  appId: "1:744779897540:web:ea9ee78127f52fba7fc791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;