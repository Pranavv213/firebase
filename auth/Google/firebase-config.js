
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(profilePic);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
