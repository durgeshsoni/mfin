import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig  = {
      apiKey: "AIzaSyDqGEdm6KfKXgWlOqisN1dNt6UX4YzOLcY",
    authDomain: "mfin-2635e.firebaseapp.com",
    projectId: "mfin-2635e",
    storageBucket: "mfin-2635e.appspot.com",
    messagingSenderId: "888019959430",
    appId: "1:888019959430:web:f019a6f7b0d84716aa5b07",
    measurementId: "G-4CC75GJPKZ"
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};