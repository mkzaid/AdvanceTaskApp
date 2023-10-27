import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmbfktYcM5ifi_Ya2EQU3sTcZTSeoxn2c",
  authDomain: "auth-devsimplified.firebaseapp.com",
  projectId: "auth-devsimplified",
  storageBucket: "auth-devsimplified.appspot.com",
  messagingSenderId: "558038010195",
  appId: "1:558038010195:web:4191e151c18bfbb68c39a6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
