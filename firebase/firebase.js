import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBC6fgVwFz-PUsosoveTW1sgof_xqWNZes",
    authDomain: "todo-app-f769a.firebaseapp.com",
    projectId: "todo-app-f769a",
    storageBucket: "todo-app-f769a.appspot.com",
    messagingSenderId: "127294715055",
    appId: "1:127294715055:web:d4a9149bef3e243784105a",
    measurementId: "G-Q79Z1PGGC6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
