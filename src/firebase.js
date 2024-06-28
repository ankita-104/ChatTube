import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcO8Yd_90RlwuP7o_3U4TAGEy1G8qI10U",
  authDomain: "chat-app-4b562.firebaseapp.com",
  projectId: "chat-app-4b562",
  storageBucket: "chat-app-4b562.appspot.com",
  messagingSenderId: "585844279027",
  appId: "1:585844279027:web:bcb5504b14341729555986"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();