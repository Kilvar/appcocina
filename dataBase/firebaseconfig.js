import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDi5BY6TwykuNvNXbwV0hJBhInBPI5M4gU",
  authDomain: "app-heladera-ee21.firebaseapp.com",
  projectId: "app-heladera-ee21",
  storageBucket: "app-heladera-ee21.appspot.com",
  messagingSenderId: "28646598069",
  appId: "1:28646598069:web:44ad047a024bedf7bb25fc"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const auth = fb.auth();
const store = fb.firestore();

export { auth, store }