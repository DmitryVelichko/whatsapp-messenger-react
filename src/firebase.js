// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCDJDxxZgRp7ZjGZNgtUqh1YLqBOXZYXYE",
  authDomain: "whatsapp-clone-3b121.firebaseapp.com",
  projectId: "whatsapp-clone-3b121",
  storageBucket: "whatsapp-clone-3b121.appspot.com",
  messagingSenderId: "143221429044",
  appId: "1:143221429044:web:8aba69545522bd6bbccb61",
  measurementId: "G-R9XZTH4S89"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initializing the App

const db = firebaseApp.firestore(); // variable db accesses the firestore instance

const auth = firebase.auth(); // authentication

const provider = new firebase.auth.GoogleAuthProvider(); // authentication for Google

export { auth, provider };
export default db;