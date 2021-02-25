import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import * as firebase from "firebase/app";


firebase.initializeApp({
    apiKey: "AIzaSyDkOIY2JczQPTg3KyYBB2Ws0u48bty2veE",
    authDomain: "buddy-7d855.firebaseapp.com",
    projectId: "buddy-7d855",
    storageBucket: "buddy-7d855.appspot.com",
    messagingSenderId: "1049218301371",
    appId: "1:1049218301371:web:f54951c850bed83548589e",
    measurementId: "G-C44KGB4D8S"
  })  

  const firestore = firebase.firestore();
  const fireauth = firebase.auth();
  const stoage = firebase.storage();

  export { firebase, firestore, fireauth, storage };