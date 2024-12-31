// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 匯入firebase
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt0AsqSLzbMNXGV5Bj2QcRJcas-itYFgE",
    authDomain: "my-react-practice-e0c52.firebaseapp.com",
    projectId: "my-react-practice-e0c52",
    storageBucket: "my-react-practice-e0c52.firebasestorage.app",
    messagingSenderId: "786926656334",
    appId: "1:786926656334:web:2c30bf2249c34c87cb5c1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 匯出
export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();