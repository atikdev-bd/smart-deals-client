// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkruzSpGbTBbbLtwVAF62lYIOatm90Ci0",
  authDomain: "smart-deals-22ac7.firebaseapp.com",
  projectId: "smart-deals-22ac7",
  storageBucket: "smart-deals-22ac7.firebasestorage.app",
  messagingSenderId: "705881280060",
  appId: "1:705881280060:web:e2adf146a8d8151f2a7d39",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
