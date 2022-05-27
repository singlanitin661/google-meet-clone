import firebase from "firebase";
import "firebase/database" ;

const firebaseConfig = {
  apiKey: "AIzaSyBcQNFKD8zrmZWFYl5n47uYG9BkG8Fdtc0",
  authDomain: "meet-clone-8200f.firebaseapp.com",
  databaseURL: "https://meet-clone-8200f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "meet-clone-8200f",
  storageBucket: "meet-clone-8200f.appspot.com",
  messagingSenderId: "809923618967",
  appId: "1:809923618967:web:c26ccdb5eafc20168aa1d2"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

export const userName = prompt("What's your name?");
const urlparams = new URLSearchParams(window.location.search);
const roomId = urlparams.get("id");

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;
