import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyAiEC8l0YCt58eZ547htOHmwCUTmE7lhoQ",
    authDomain: "new-programming-jobs.firebaseapp.com",
    projectId: "new-programming-jobs",
    storageBucket: "new-programming-jobs.appspot.com",
    messagingSenderId: "862516914968",
    appId: "1:862516914968:web:6b4c21f2f873b65e430c6d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firestore instance
const firestore = firebase.firestore();

//auth instance
const auth = firebase.auth();

// since we are using the google as provider we need to create an instance of it.

export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = (e) => {
	e.preventDefault();
	console.log('in sigin');
	auth
		.signInWithPopup(GoogleProvider)
		.then((res) => console.log('logged the user'))
		.catch((err) => console.log(err));
};

export const signOut = () => {
	auth
		.signOut()
		.then((res) => console.log(res))
		.catch((err) => console.log(err.message));
};
export { firebase, firestore, auth };
