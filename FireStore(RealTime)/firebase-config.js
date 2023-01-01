
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3eNbMt7F7bxqXKC4Tn9Z4a_MQ1f-MeN0",
  authDomain: "web3-5c8fa.firebaseapp.com",
  projectId: "web3-5c8fa",
  storageBucket: "web3-5c8fa.appspot.com",
  messagingSenderId: "938244568639",
  appId: "1:938244568639:web:79aa155ba36ca5a83d6a8a",
  measurementId: "G-KWDYM8WJLE"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
