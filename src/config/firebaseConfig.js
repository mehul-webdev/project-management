import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBQW3HfBCUIn6fAawvtaQ2Y7s_F_TEFgBY",
  authDomain: "project-management-2b569.firebaseapp.com",
  projectId: "project-management-2b569",
  storageBucket: "project-management-2b569.firebasestorage.app",
  messagingSenderId: "1019651997735",
  appId: "1:1019651997735:web:9cd830c1389411b15f0e02",
  measurementId: "G-Z4GCFVSF0R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
// const analytics = getAnalytics(app);
