import { takeLatest, call, put, all } from 'redux-saga/effects'
import { types, actions } from '../../redux/user/userReducer'
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase'

function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, additionalData)
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

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password)
    yield put(actions.signUp.success({ user, additionalData: { displayName } }))
  } catch (error) {
    yield put(actions.signUp.failure(error.message))
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData)
}

export default function*() {
  yield all([
    yield takeLatest(types.GOOGLE_SIGN_IN, signInWithGoogle),
    yield takeLatest(types.EMAIL_SIGN_IN, signInWithEmail),
    yield takeLatest(types.CHECK_USER_SESSION, isUserAuthenticated),
    yield takeLatest(types.SIGN_OUT.REQUEST, signOut),
    yield takeLatest(types.SIGN_UP.REQUEST, signUp),
    yield takeLatest(types.SIGN_UP.SUCCESS, signInAfterSignUp),
  ])
}
