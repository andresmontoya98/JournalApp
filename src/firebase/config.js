import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

// Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDdPG7ENHzf2O74xQ93a5QvH86UU8f99vk",
    authDomain: "react-curso-55bd2.firebaseapp.com",
    projectId: "react-curso-55bd2",
    storageBucket: "react-curso-55bd2.appspot.com",
    messagingSenderId: "165066635338",
    appId: "1:165066635338:web:1c4b938b84535236a1ceb3"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);



