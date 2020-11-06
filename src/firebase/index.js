import firebase from 'firebase'
import 'firebase/firestore'

 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBr2EzezYaxkM4JoQ3ndI-gEDs7JKgDF1U",
    authDomain: "employee-3dd0b.firebaseapp.com",
    databaseURL: "https://employee-3dd0b.firebaseio.com",
    projectId: "employee-3dd0b",
    storageBucket: "employee-3dd0b.appspot.com",
    messagingSenderId: "282931714230",
    appId: "1:282931714230:web:97642f5730a9c3581c6e17",
    measurementId: "G-F56BZHFJV9"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  export default firebase.initializeApp(firebaseConfig);
//   firebase.analytics();