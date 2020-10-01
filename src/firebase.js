import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSAlbrfhBK_7ngA8YkaVIQ23DBQ25uXKo",
  authDomain: "connectify-413fb.firebaseapp.com",
  databaseURL: "https://connectify-413fb.firebaseio.com",
  projectId: "connectify-413fb",
  storageBucket: "connectify-413fb.appspot.com",
  messagingSenderId: "501064346594",
  appId: "1:501064346594:web:e24bd0f0a0708ef89167bb",
  measurementId: "G-7QPMCV8LM9"
};

// Initialize Firebase
export const fire= firebase.initializeApp(firebaseConfig);




