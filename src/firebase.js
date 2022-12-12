import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDP52uV7XvnJXtBw9BDuDXWuTjvIxcw2cs",
    authDomain: "connectin-48f31.firebaseapp.com",
    projectId: "connectin-48f31",
    storageBucket: "connectin-48f31.appspot.com",
    messagingSenderId: "245356014133",
    appId: "1:245356014133:web:8bac8d967d65de1462df7c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};