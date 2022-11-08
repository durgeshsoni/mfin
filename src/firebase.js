import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyCc6yS4zIj9wQ4xd_4xevV-jxGuxE8NMRY",
  authDomain: "otp-mfin.firebaseapp.com",
  projectId: "otp-mfin",
  storageBucket: "otp-mfin.appspot.com",
  messagingSenderId: "437520465395",
  appId: "1:437520465395:web:a275eb07d3b3580bee2686",
  measurementId: "G-D9Z6RPYSJG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase