import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore, collection, docs} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBFz5EGdq02_AOarVUk8FV9M3XQFwmckpo",
  authDomain: "acovepo.firebaseapp.com",
  projectId: "acovepo",
  storageBucket: "acovepo.appspot.com",
  messagingSenderId: "45740087434",
  appId: "1:45740087434:web:47b4823624c2aa4aacb573",
  measurementId: "G-15L34JR7KH"
  });
  
export const auth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);