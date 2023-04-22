import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLgkuyqj17nu7GpIiO0MhqwovQ7qerIvs",
  authDomain: "otp-test-16938.firebaseapp.com",
  projectId: "otp-test-16938",
  storageBucket: "otp-test-16938.appspot.com",
  messagingSenderId: "938733556023",
  appId: "1:938733556023:web:214fee9a09d5ab47a5cab2",
  measurementId: "G-14YGNG2H1B",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
