// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC4psMcwjbC94HN56XS24Q8576IqBRapDA',
  authDomain: 'chatapp-c7437.firebaseapp.com',
  projectId: 'chatapp-c7437',
  storageBucket: 'chatapp-c7437.appspot.com',
  messagingSenderId: '709142595197',
  appId: '1:709142595197:web:160c852446e952f0bd5314',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
