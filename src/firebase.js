import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3wvYtx-ZjStiRQk6efMPfl3XJ7kVhoiU",
  authDomain: "manish-p3-gc.firebaseapp.com",
  projectId: "manish-p3-gc",
  storageBucket: "manish-p3-gc.appspot.com",
  messagingSenderId: "985490085510",
  appId: "1:985490085510:web:9b1722caf1a3b0aef8e307",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
// const storage = getStorage(firebaseApp);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
