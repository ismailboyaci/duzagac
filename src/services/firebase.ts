// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDx7x508ElEdvif4A6vEht2n0wesdwb70",
  authDomain: "dt321-eb797.firebaseapp.com",
  projectId: "dt321-eb797",
  storageBucket: "dt321-eb797.appspot.com",
  messagingSenderId: "196034301568",
  appId: "1:196034301568:web:5cdeb0f93c9e2ab2946065",
  measurementId: "G-ZVJG88NHKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)


export { app, storage };
