import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDFZ21HRoJkQe4HKmGRTFb840HVNaSWWeY",
  authDomain: "story-hub-374f5.firebaseapp.com",
  projectId: "story-hub-374f5",
  storageBucket: "story-hub-374f5.appspot.com",
  messagingSenderId: "959515837382",
  appId: "1:959515837382:web:153c8bef7c1a12453928c7"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();