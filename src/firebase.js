import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4J9H6QT1kX7TlWNjkCDyWVNbzYGTiqvw",
  authDomain: "todo-react-1300c.firebaseapp.com",
  databaseURL: "https://todo-react-1300c.firebaseio.com",
  projectId: "todo-react-1300c",
  storageBucket: "todo-react-1300c.appspot.com",
  messagingSenderId: "935730115930",
  appId: "1:935730115930:web:34c89e3ae73ff158496f63",
  measurementId: "G-ZL5JH7XHLK"
});

const db = firebaseApp.firestore();

export default db;