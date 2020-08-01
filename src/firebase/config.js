import * as firebase from  'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/analytics';

var firebaseConfig = {
    apiKey: "AIzaSyDOzHo7hJSX5bF0JRreT6wXK7Qng2E0jrw",
    authDomain: "react-photo-gallery-11216.firebaseapp.com",
    databaseURL: "https://react-photo-gallery-11216.firebaseio.com",
    projectId: "react-photo-gallery-11216",
    storageBucket: "react-photo-gallery-11216.appspot.com",
    messagingSenderId: "643026693395",
    appId: "1:643026693395:web:3485e3c5e24eb65790fee6",
    measurementId: "G-90N57KJWHQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const storage = firebase.storage();
  const firestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { storage, firestore, timeStamp };