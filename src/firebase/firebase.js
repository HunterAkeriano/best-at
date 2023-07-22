import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyCWhEXY5FDiP4bKxX-lM7owpKHfYM24VPw",
  authDomain: "best-at-cb209.firebaseapp.com",
  projectId: "best-at-cb209",
  storageBucket: "best-at-cb209.appspot.com",
  messagingSenderId: "617863519140",
  appId: "1:617863519140:web:5d764714a953ef93913f31",
  measurementId: "G-SMN2E1B9HF"
};
const app = initializeApp(firebaseConfig);
const secondaryApp = initializeApp(firebaseConfig, 'Secondary');
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app)

export default app;
export  {auth, db, storage, secondaryApp, }