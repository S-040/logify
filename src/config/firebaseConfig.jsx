import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCvlJj8z5kivANGo7X4bcFT7Hq-X16-nzQ",
  authDomain: "assignment-44ef9.firebaseapp.com",
  projectId: "assignment-44ef9",
  storageBucket: "assignment-44ef9.firebasestorage.app",
  messagingSenderId: "630094057284",
  appId: "1:630094057284:web:4dfaf2cdd15f7c6fa91111",
  measurementId: "G-KQXJTBS023"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
