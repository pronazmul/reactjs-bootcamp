import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAzWhbqWkAKYJ7e1QEIAESWzE1ri1be7Fo",
  authDomain: "twitter-clone-251bc.firebaseapp.com",
  projectId: "twitter-clone-251bc",
  storageBucket: "twitter-clone-251bc.appspot.com",
  messagingSenderId: "353169609734",
  appId: "1:353169609734:web:e29bae47de30d571aedf87",
  measurementId: "G-1Q8J7ENKZB"
}
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  export default firebaseApp