import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAwaox6npx_RdEL_M3e1UHAsibINMZjJns",
    authDomain: "react-backend-baf59.firebaseapp.com",
    databaseURL: "https://react-backend-baf59.firebaseio.com",
    projectId: "react-backend-baf59",
    storageBucket: "react-backend-baf59.appspot.com",
    messagingSenderId: "223556678159",
    appId: "1:223556678159:web:2aa8887eef2ed0a420697a"
  };

//taking the userAuth object that we get back from the authentication process and 
//adding it to the users collection in the firebase database (only if it doesn't already exist)
export const createUserProfileDocument = async (userAuth, additionalData) => {

  //exiting the function if the function was called on logout.
  //Therefore the userAuth will be null
  if(!userAuth) return;

  //getting back the snapshot with the data to check if the user exists already in the database
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get() 

  if (!snapShot.exists) {
    //if the user doesn't already exist, we prepare the object to be inserted in the DB
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      //trying to set the user in the database calling the set method on the userRef object
      //other methods other than set are available: .delete() etc
      await userRef.set({

        displayName, 
        email,
        createdAt, 
        ...additionalData
      })
    } catch(e) {
      console.log(e.message)
    }
  }
  //returning the snapshot to set the user state of the application
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//GOOGLE POP-UP LOGIN METHOD 
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;