// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDBxmymLEhoMiOKvd2I1bDntm9LJ9vszFw",
    authDomain: "trolliey.firebaseapp.com",
    projectId: "trolliey",
    storageBucket: "trolliey.appspot.com",
    messagingSenderId: "954585772122",
    appId: "1:954585772122:web:c78d6f316e5bd597696863",
    measurementId: "G-6E7FD2W5Q7"
})


const db = app.firestore()
const auth = app.auth()
const storage = firebase.storage()

export { db, auth, storage };
