import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDAfBnnoFVfCbIrEuxOJp7KCIyxLPb2wkQ',
  authDomain: 'financetracker-430f1.firebaseapp.com',
  projectId: 'financetracker-430f1',
  storageBucket: 'financetracker-430f1.appspot.com',
  messagingSenderId: '830493426000',
  appId: '1:830493426000:web:3abc9ef7fc1719c56aac55',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
