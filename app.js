const menuButton = document.getElementById('menu-button');
const mobileNav = document.getElementById('mobile-nav');

menuButton.addEventListener('click', function() {
  mobileNav.classList.toggle('show'); // Toggle 'show' class for visibility
});



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "beholdertourism.firebaseapp.com",
  projectId: "beholdertourism",
  storageBucket: "beholdertourism.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
