import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDDd7ZauEpElRkPj7Y385zVf_Fbaw_oyY4",
  authDomain: "projekt-1ef78.firebaseapp.com",
  databaseURL: "https://projekt-1ef78.firebaseio.com",
  projectId: "projekt-1ef78",
  storageBucket: "projekt-1ef78.appspot.com",
  messagingSenderId: "855434626189",
  appId: "1:855434626189:web:2e49e0487356dd48f54ec4",
  measurementId: "G-RPP18E2F81",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export default firebaseApp;
