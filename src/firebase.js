
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey || 'test',
  authDomain: process.env.REACT_APP_authDomain || 'test',
  projectId: process.env.REACT_APP_projectId || 'test',
  storageBucket: process.env.REACT_APP_storageBucket || 'test',
  messagingSenderId: process.env.REACT_APP_messagingSenderId || 'test',
  appId: process.env.REACT_APP_appId || 'test',
  measurementId:process.env.REACT_APP_measurementId || 'test'
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);