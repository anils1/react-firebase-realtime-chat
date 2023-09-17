import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxBfFaxQ8HIOMeFweiH8MoRaTaq4FXXqk",
  authDomain: "mychat-84504.firebaseapp.com",
  projectId: "mychat-84504",
  storageBucket: "mychat-84504.appspot.com",
  messagingSenderId: "768054048853",
  appId: "1:768054048853:web:425023968129bc09d43cdc"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();