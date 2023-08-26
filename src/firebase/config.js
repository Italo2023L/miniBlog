// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvt23PysRykC_oIYzDdyTmmwETJqOGRxY",
  authDomain: "miniblog-d66b8.firebaseapp.com",
  projectId: "miniblog-d66b8",
  storageBucket: "miniblog-d66b8.appspot.com",
  messagingSenderId: "810883767779",
  appId: "1:810883767779:web:4b7f6dc7ff01fc8b5054d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };