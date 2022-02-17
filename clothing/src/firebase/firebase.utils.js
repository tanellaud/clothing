import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { Firestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyC8w4Q-BOfo34fSEOPfvjkUAaAfmTx5GGU",
    authDomain: "crown-db-33269.firebaseapp.com",
    projectId: "crown-db-33269",
    storageBucket: "crown-db-33269.appspot.com",
    messagingSenderId: "631618181653",
    appId: "1:631618181653:web:c584773d2db344e5e34c1c",
    measurementId: "G-WS9PRTB6K5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;