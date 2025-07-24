// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // 🔥 add this

const firebaseConfig = {
  apiKey: "AIzaSyDyAveALgEMUHMcnnRGWVE6kR7I2OfDLPU",
  authDomain: "shoppingcart-d4e6b.firebaseapp.com",
  projectId: "shoppingcart-d4e6b",
  storageBucket: "shoppingcart-d4e6b.firebasestorage.app",
  messagingSenderId: "74872273783",
  appId: "1:74872273783:web:806a3cd7f578af7a8c3f72",
  measurementId: "G-F5TY07YN71",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
