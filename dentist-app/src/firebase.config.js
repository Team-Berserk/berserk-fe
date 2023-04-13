import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdcF9e7bKZ1f9gtSqt_-fSxVPlVE1fNtI",
  authDomain: "test-670ba.firebaseapp.com",
  projectId: "test-670ba",
  storageBucket: "test-670ba.appspot.com",
  messagingSenderId: "180991711627",
  appId: "1:180991711627:web:0dd0f67f8f2434f610778e",
  measurementId: "G-XXL1FGYT2D",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
