import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmyZDuZGwRB3rS2m_lghkvAjYZ3mfXKMM",
  authDomain: "otptest-dd5c1.firebaseapp.com",
  projectId: "otptest-dd5c1",
  storageBucket: "otptest-dd5c1.appspot.com",
  messagingSenderId: "981320924569",
  appId: "1:981320924569:web:36460e3abc861064c0e708",
  measurementId: "G-X3ZQ1C183V"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
