import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKSbsmSk3F0uTSWiJXAjOCbrbz3LlpQMk",
  authDomain: "clone-35cb2.firebaseapp.com",
  databaseURL: "https://clone-35cb2.firebaseio.com",
  projectId: "clone-35cb2",
  storageBucket: "clone-35cb2.appspot.com",
  messagingSenderId: "425486750092",
  appId: "1:425486750092:web:8907e6577cfd28300906a9",
  measurementId: "G-XPW126W5S4"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };