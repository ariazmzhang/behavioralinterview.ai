// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpj2Xu0l5kfztY81SZp5d7oUbqJpEVyso",
  authDomain: "nextjs-firebase-auth-1b3e7.firebaseapp.com",
  projectId: "behavioral-interview-ai",
  storageBucket: "behavioral-interview-ai.appspot.com",
  messagingSenderId: "24462626494",
  appId: "1:24462626494:web:ed0d05175c210524dcd8ef",
  measurementId: "G-0KMCEM681L"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Correctly initialize Analytics only in supported environments
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
    }
  });
}

export { app };