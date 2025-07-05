// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFAewQDd43FngvNJS7z-bW1awFng91FuM",
  authDomain: "devcine-gpt.firebaseapp.com",
  projectId: "devcine-gpt",
  storageBucket: "devcine-gpt.firebasestorage.app",
  messagingSenderId: "65285696281",
  appId: "1:65285696281:web:faf7397750ad866c2ab388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;