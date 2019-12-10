import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDrmZ6HM00S1i4yr-PagydWO-gEXFJTX_U",
  authDomain: "crwn-db-e34b6.firebaseapp.com",
  databaseURL: "https://crwn-db-e34b6.firebaseio.com",
  projectId: "crwn-db-e34b6",
  storageBucket: "crwn-db-e34b6.appspot.com",
  messagingSenderId: "106543493881",
  appId: "1:106543493881:web:8c6eba495de4fdf606a828",
  measurementId: "G-YGBXNNZ7H4"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
