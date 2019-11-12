import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyBCUukPjRCAU6OduNCaPHbEd8wpsCnpRrk",
    authDomain: "sunshine-4492f.firebaseapp.com",
    databaseURL: "https://sunshine-4492f.firebaseio.com",
    projectId: "sunshine-4492f",
    storageBucket: "sunshine-4492f.appspot.com",
    messagingSenderId: "725059880091",
    appId: "1:725059880091:web:c0f08f077dd2ed1462323e",
    measurementId: "G-REZ0JGQFZZ"
}

let fire = firebase.initializeApp(config);

export default fire;
