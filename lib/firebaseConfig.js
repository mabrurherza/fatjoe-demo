// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz_advSQ0MO-uPmmkMbf3FXgDNkY9iWdE",
  authDomain: "fatjoe-preview-web.firebaseapp.com",
  projectId: "fatjoe-preview-web",
  storageBucket: "fatjoe-preview-web.appspot.com",
  messagingSenderId: "686162786680",
  appId: "1:686162786680:web:7686663f0667bcf975b08d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
