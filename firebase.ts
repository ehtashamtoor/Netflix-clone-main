
import { initializeApp, getApp, getApps } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMPF3uHX6QCFskRJTSHua03GkfWlsqecI",
    authDomain: "netflix-clone-3255a.firebaseapp.com",
    projectId: "netflix-clone-3255a",
    storageBucket: "netflix-clone-3255a.appspot.com",
    messagingSenderId: "714599135917",
    appId: "1:714599135917:web:86c22d725601074c622424"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore()
const auth = getAuth();


export default app
export { auth, db }