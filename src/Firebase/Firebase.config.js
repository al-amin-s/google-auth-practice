// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5yd0T8Lpx00id6qf2kLglaRh3SB7HBxU",
  authDomain: "fir-auth-final-recap.firebaseapp.com",
  projectId: "fir-auth-final-recap",
  storageBucket: "fir-auth-final-recap.appspot.com",
  messagingSenderId: "1066750790490",
  appId: "1:1066750790490:web:fb506970be158c2f4a0163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;