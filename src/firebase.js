import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCkmBr6fTyuax54hYMpiTaOTdNd7pdDCtw",
  authDomain: "myapp-54ac0.firebaseapp.com",
  projectId: "myapp-54ac0",
  storageBucket: "myapp-54ac0.appspot.com",
  messagingSenderId: "234064939648",
  appId: "1:234064939648:web:6f6dc9a9b0bbbfdca47465"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
