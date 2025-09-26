import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEuEnUKICMgm7M1DzTbu3DFek2ouhXUDM",
  authDomain: "chatbot-ccbeb.firebaseapp.com",
  projectId: "chatbot-ccbeb",
  storageBucket: "chatbot-ccbeb.firebasestorage.app",
  messagingSenderId: "805526710393",
  appId: "1:805526710393:web:ed422fc5d16cff4f208ca8",
  measurementId: "G-6EL433MJE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
