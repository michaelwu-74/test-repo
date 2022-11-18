/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDInMEpdVXyWD57oneAdfHX-emAR_TQvrY",
  authDomain: "new17-ede1b.firebaseapp.com",
  projectId: "new17-ede1b",
  storageBucket: "new17-ede1b.appspot.com",
  messagingSenderId: "601503329406",
  appId: "1:601503329406:web:776e1ddc2f2fc9c048fc2f",
  measurementId: "G-C30NWC7XC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/


import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCZ5PEnk7cXzzpEwv8jLECV6_S2RUvTiUA",
  authDomain: "november16-141af.firebaseapp.com",
  databaseURL: "https://november16-141af-default-rtdb.firebaseio.com/",
  projectId: "november16-141af",
  storageBucket: "november16-141af.appspot.com",
  messagingSenderId: "334652918120",
  appId: "1:334652918120:web:c3f175ab56295723d7eedd",
  measurementId: "G-LG45SXGG2W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  
  set(reference, {
    username: name,
    email: email, 
    profile_picture: imageUrl
  });
}

writeUserData("testnameforme", "name", "emailtest.com", "myimageurl"); 
