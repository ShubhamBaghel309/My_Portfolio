import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBAIdOLPh8YY_b8TLxVJOsGJyMGVqUtdo4",
  authDomain: "shubhamportfolio-6aad6.firebaseapp.com",
  projectId: "shubhamportfolio-6aad6",
  storageBucket: "shubhamportfolio-6aad6.appspot.com",
  messagingSenderId: "706135120063",
  appId: "1:706135120063:web:c14f52120ceaccf25cce0a",
  measurementId: "G-FCLQ08F1NZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 