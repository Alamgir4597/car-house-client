// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuesEfvKaBqYpNZHGukYgv8sDyRovGs1s",
    authDomain: "assignment-eleven-f8c06.firebaseapp.com",
    projectId: "assignment-eleven-f8c06",
    storageBucket: "assignment-eleven-f8c06.appspot.com",
    messagingSenderId: "41563150468",
    appId: "1:41563150468:web:24b23d18c479dbc673cad1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app) ;
export default auth;