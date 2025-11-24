import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKLAOHVjE694_hSYD19VCW2blxJVj0gCE",
  authDomain: "bonsen-project.firebaseapp.com",
  projectId: "bonsen-project",
  storageBucket: "bonsen-project.firebasestorage.app",
  messagingSenderId: "635340643178",
  appId: "1:635340643178:web:375a36496725da6ab4a313",
  measurementId: "G-76L81ZBG3J"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
