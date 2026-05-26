const firebaseConfig = {// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbKukFkZYTp-a3CHCSp992GXRM9DTB65U",
  authDomain: "fast-grocery-cecdd.firebaseapp.com",
  databaseURL: "https://fast-grocery-cecdd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fast-grocery-cecdd",
  storageBucket: "fast-grocery-cecdd.firebasestorage.app",
  messagingSenderId: "1097213209050",
  appId: "1:1097213209050:web:93c35dee77f4aff4a138e3",
  measurementId: "G-H0J73RZMWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
}
