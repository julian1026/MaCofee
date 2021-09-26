import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyCN9djR3Y-I5Yqjc68j9H4OIcQmDmVGP1o",
    authDomain: "plantationsofcoffe.firebaseapp.com",
    databaseURL: "https://plantationsofcoffe-default-rtdb.firebaseio.com",
    projectId: "plantationsofcoffe",
    storageBucket: "plantationsofcoffe.appspot.com",
    messagingSenderId: "72778215950",
    appId: "1:72778215950:web:f91cbc5c96dbb8c067825f"
}
export const firebaseApp = firebase.initializeApp(firebaseConfig);