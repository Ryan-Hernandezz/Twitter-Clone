import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "key",
  authDomain: "twighter-9fd35.firebaseapp.com",
  databaseURL: "https://twighter-9fd35-default-rtdb.firebaseio.com",
  projectId: "twighter-9fd35",
  storageBucket: "twighter-9fd35.appspot.com",
  messagingSenderId: "968841657949",
  appId: "API",
  measurementId: "G-GGEWK672DQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;

