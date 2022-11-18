import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAMhcA7MJYpI_TB3iBRD2f_CoDVR5y4rUU",
    authDomain: "e-ride-stage-4-b3810.firebaseapp.com",
    projectId: "e-ride-stage-4-b3810",
    storageBucket: "e-ride-stage-4-b3810.appspot.com",
    messagingSenderId: "353368826421",
    appId: "1:353368826421:web:e3180b359b24af0b2e477c"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
