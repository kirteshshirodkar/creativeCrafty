// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxEWsQ1O0YZ4760FuNv3020k6wm8Wqd2g",
  authDomain: "creativecrafty-274f7.firebaseapp.com",
  projectId: "creativecrafty-274f7",
  storageBucket: "creativecrafty-274f7.firebasestorage.app",
  messagingSenderId: "559985788709",
  appId: "1:559985788709:web:74a59bdddddcd5f6743ccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);