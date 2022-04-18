// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuhn5fG4FvnD94s17YNC32q2JF2o61Fxo",
  authDomain: "eventos-especiales-2bf71.firebaseapp.com",
  projectId: "eventos-especiales-2bf71",
  storageBucket: "eventos-especiales-2bf71.appspot.com",
  messagingSenderId: "832168009882",
  appId: "1:832168009882:web:0f08f16418d6ccd55f3f23",
  measurementId: "G-B9G68ZFMZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export default database;