import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp =firebase.initializeApp(
  {
    apiKey: "AIzaSyAWdCiSDcifD9dVNEAxeQPw8qbF8OmIOFY",
    authDomain: "instagram-clone-react-93b16.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-93b16-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-react-93b16",
    storageBucket: "instagram-clone-react-93b16.appspot.com",
    messagingSenderId: "82041865444",
    appId: "1:82041865444:web:5381350a3b3f9d3c5318f1",
    measurementId: "G-WW6WCVNVVJ"
  }
) ;

  

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage} 
 

