import * as firebase from "firebase/app";

import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD0DaKrmo_RV3IIFMPb8QiCu7QIg72vdMA",
  authDomain: "memory-game-e2464.firebaseapp.com",
  databaseURL: "https://memory-game-e2464.firebaseio.com",
  projectId: "memory-game-e2464",
  storageBucket: "memory-game-e2464.appspot.com",
  messagingSenderId: "585201032788",
  appId: "1:585201032788:web:f56be247cd02a72d0057c1",
  measurementId: "G-L33PPEJN6V",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
