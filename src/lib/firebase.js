import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD0zeLIH6Qr1jprcHxej_nABIotnkmmBMU",
  authDomain: "career-swipe-afa59.firebaseapp.com",
  databaseURL: "https://career-swipe-afa59.firebaseio.com",
  projectId: "career-swipe-afa59",
  storageBucket: "career-swipe-afa59.appspot.com",
  messagingSenderId: "416552523187",
  appId: "1:416552523187:web:6a5f2dbe90ed5edeae67c6",
  measurementId: "G-VY65B9J292"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
