// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_uw1A7DuelmPXPVh2U3szM-TsyaEh4u4",
  authDomain: "lai-portfolio.firebaseapp.com",
  projectId: "lai-portfolio",
  storageBucket: "lai-portfolio.appspot.com",
  messagingSenderId: "735470020532",
  appId: "1:735470020532:web:7d99dc527789d3021134e1",
  measurementId: "G-V5ZW5HD8J3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);