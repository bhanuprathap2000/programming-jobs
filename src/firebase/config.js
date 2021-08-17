import app from 'firebase/app'; //core package
import 'firebase/firestore'; //firestore
import 'firebase/auth';//auth

const firebaseConfig = {
	apiKey: "AIzaSyAiEC8l0YCt58eZ547htOHmwCUTmE7lhoQ",
    authDomain: "new-programming-jobs.firebaseapp.com",
    projectId: "new-programming-jobs",
    storageBucket: "new-programming-jobs.appspot.com",
    messagingSenderId: "862516914968",
    appId: "1:862516914968:web:6b4c21f2f873b65e430c6d"
};

// Initialize Firebase
const firebase = app.initializeApp(firebaseConfig);

//firestore instance
const firestore = firebase.firestore();

//auth instance
const auth = firebase.auth();

// since we are using the google as provider we need to create an instance of it.

const googleProvider = new app.auth.GoogleAuthProvider()

export const signInWithGoogle = () => {

	auth.signInWithPopup(googleProvider)
		.then(res => (console.log('logged the user')))
	.catch(err=>console.log(err.message))
	
}

export const signOut = () => {
	auth.signOut().then(res => (console.log(res)))
	.catch(err=>(console.log(err.message)))
}
export { firebase, firestore, app,auth };
