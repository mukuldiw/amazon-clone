import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCW3JoNyP34WZHo0UYsFpMYVBbic_HUIXA",
    authDomain: "e-clone-19fa2.firebaseapp.com",
    projectId: "e-clone-19fa2",
    storageBucket: "e-clone-19fa2.appspot.com",
    messagingSenderId: "537640445789",
    appId: "1:537640445789:web:accbf42036fb8a5eab2ab4",
    measurementId: "G-P45LH011MC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};