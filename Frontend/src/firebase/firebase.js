// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX2ie_dX3BRDgwgM2XJw6ArOUlPwhFLTc",
  authDomain: "project-management-tool-a29cc.firebaseapp.com",
  projectId: "project-management-tool-a29cc",
  storageBucket: "project-management-tool-a29cc.appspot.com",
  messagingSenderId: "327806706710",
  appId: "1:327806706710:web:533e11922a2b5696ff4137",
  measurementId: "G-EFNSJS3XJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {app,auth,analytics,db};
