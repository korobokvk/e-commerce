import { takeLatest, call, put, all } from 'redux-saga/effects'
import { types, actions } from '../../redux/user/userReducer'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase'

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth)
    const userSnapshot = yield userRef.get()
    yield put(actions.signIn.success({ id: userSnapshot.id, ...userSnapshot.data() }))
  } catch (error) {
    yield put(actions.signIn.failure(error.message))
  }
}
function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(actions.signIn.failure(error.message))
  }
}
function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    put(actions.signIn.failure(error.message))
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser()
    if (!userAuth) return
    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    put(actions.signIn.failure(error.message))
  }
}

function* signOut() {
  try {
    yield auth.signOut()
    yield put(actions.signOut.success())
  } catch (error) {
    yield put(actions.signOut.failure(error.message))
  }
}

export default function*() {
  yield all([
    yield takeLatest(types.GOOGLE_SIGN_IN, signInWithGoogle),
    yield takeLatest(types.EMAIL_SIGN_IN, signInWithEmail),
    yield takeLatest(types.CHECK_USER_SESSION, isUserAuthenticated),
    yield takeLatest(types.SIGN_OUT.REQUEST, signOut),
  ])
}
