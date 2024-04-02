// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9NDa_9zJ1X9lLcn8OKSbNdOt9zj1WTYc",
  authDomain: "starwars-49bf4.firebaseapp.com",
  projectId: "starwars-49bf4",
  storageBucket: "starwars-49bf4.appspot.com",
  messagingSenderId: "30613964531",
  appId: "1:30613964531:web:14c26c139617eae2d49986"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getDatabase(app);