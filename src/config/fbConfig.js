import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
 	apiKey: "AIzaSyDwVFWd_kX5EPPgYD5i-RUxARm1oqEKp9E",
    authDomain: "net-ninja-mario-plan-ae06e.firebaseapp.com",
    databaseURL: "https://net-ninja-mario-plan-ae06e.firebaseio.com",
    projectId: "net-ninja-mario-plan-ae06e",
    storageBucket: "net-ninja-mario-plan-ae06e.appspot.com",
    messagingSenderId: "1064365763076",
    appId: "1:1064365763076:web:4b019a06b770273fd9e351",
    measurementId: "G-HTGW9LJ64X"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 

