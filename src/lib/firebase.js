import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import the seed file
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: 'AIzaSyBlGBpL1gI4NmTZpTcmmTrMpcD4Y_mNd-g',
  authDomain: 'instagram-byvrd.firebaseapp.com',
  projectId: 'instagram-byvrd',
  storageBucket: 'instagram-byvrd.appspot.com',
  messagingSenderId: '704094527623',
  appId: '1:704094527623:web:404193872da4d462d61822',
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

// call the seed file (onlyOnce)
// seedDatabase(firebase);
export { firebase, FieldValue };
