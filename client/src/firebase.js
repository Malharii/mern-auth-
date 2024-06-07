// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-10dc2.firebaseapp.com",
  projectId: "mern-auth-10dc2",
  storageBucket: "mern-auth-10dc2.appspot.com",
  messagingSenderId: "115713551731",
  appId: "1:115713551731:web:6d63aa45c425f522dfa906",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
