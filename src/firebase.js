import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD8iiKJZh-7oaKC8H-IaL0Kwyah-iczZ00",
    authDomain: "challange-1bc7b.firebaseapp.com",
    projectId: "challange-1bc7b",
    storageBucket: "challange-1bc7b.appspot.com",
    messagingSenderId: "192557498423",
    appId: "1:192557498423:web:bbfb2ab2c6d23a79f7ffb2",
    measurementId: "G-KVN0G8DC2P"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};