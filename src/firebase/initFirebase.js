import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB-VzHQk9u98VS3qU-SbwiCIILqIKpplIw",
	authDomain: "smart-bca.firebaseapp.com",
	projectId: "smart-bca",
	storageBucket: "smart-bca.appspot.com",
	messagingSenderId: "994416215848",
	appId: "1:994416215848:web:0c4a87067f13b40e36f21d",
	measurementId: "G-9CKPM55G8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, app };
