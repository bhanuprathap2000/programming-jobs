import app from 'firebase/app';
import 'firebase/firestore';
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

const firestore = firebase.firestore();

export { firebase, firestore, app };
