import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import the seed file
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: 'AIzaSyC4CuVz-LuUtrN0s4iDDMWYJRp0-P9DoMA',
  authDomain: 'instagram-c3ce1.firebaseapp.com',
  projectId: 'instagram-c3ce1',
  storageBucket: 'instagram-c3ce1.appspot.com',
  messagingSenderId: '780502457078',
  appId: '1:780502457078:web:f6830de77fb776d9516ad7',
};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

// call the seed file (onlyOnce)
// seedDatabase(firebase);
export { firebase, FieldValue };
