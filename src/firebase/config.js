import app from 'firebase/app'; //core package
import 'firebase/firestore'; //firestore
import 'firebase/auth';//auth

const firebaseConfig = {
	apiKey: 'AIzaSyAPdTeZQlZKVLoCVMCxwujbla-6G4615Ao',
	authDomain: 'programming-jobs.firebaseapp.com',
	projectId: 'programming-jobs',
	storageBucket: 'programming-jobs.appspot.com',
	messagingSenderId: '624464927338',
	appId: '1:624464927338:web:21e88e19ee9f1accbcc813',
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
