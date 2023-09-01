import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import 'firebase/auth'
import 'firebase/firestore'
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3GYX1Kd1ciUvn3L7q8vpyVvce00fOy9E",
  authDomain: "netflix-clone-77cdd.firebaseapp.com",
  projectId: "netflix-clone-77cdd",
  storageBucket: "netflix-clone-77cdd.appspot.com",
  messagingSenderId: "562203229493",
  appId: "1:562203229493:web:b5c91a1d60ba1da4ce207c",
  measurementId: "G-W1M2PEZX70"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);