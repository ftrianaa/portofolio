'use client'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyDeAbWpb8hym43ZN0nl1SN_0y3G1w5CfCU",
     authDomain: "portofolio-578ef.firebaseapp.com",
     projectId: "portofolio-578ef",
     storageBucket: "portofolio-578ef.appspot.com",
     messagingSenderId: "876642231614",
     appId: "1:876642231614:web:f1ac86b1c3543f2694f86f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage }