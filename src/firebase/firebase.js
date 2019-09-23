import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyC2mzZ7dVSUauWkgMwXFP0LeYCeWfOzOGc',
  authDomain: 'crwn-db-d8e1d.firebaseapp.com',
  databaseURL: 'https://crwn-db-d8e1d.firebaseio.com',
  projectId: 'crwn-db-d8e1d',
  storageBucket: '',
  messagingSenderId: '134212533311',
  appId: '1:134212533311:web:5f5c2146ffed00d2384c8a',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
