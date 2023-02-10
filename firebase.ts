import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr1NUbm9870eTqUB4fUSWgYbLv6nY75Dw",
  authDomain: "gptclone-66ac2.firebaseapp.com",
  projectId: "gptclone-66ac2",
  storageBucket: "gptclone-66ac2.appspot.com",
  messagingSenderId: "575701664133",
  appId: "1:575701664133:web:a8fabccf9a2ee14a7e04ec",
};

// Initialize Firebase
// singleton pattern

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
