import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDpP0niil3VctlKseGcWu7mdCvQo9kChNo",
  authDomain: "codingcoach-32059.firebaseapp.com",
  databaseURL: "https://codingcoach-32059.firebaseio.com",
  projectId: "codingcoach-32059",
  storageBucket: "codingcoach-32059.appspot.com",
  messagingSenderId: "1013185820871"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
