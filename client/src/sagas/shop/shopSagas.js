import { takeLatest, call, put } from 'redux-saga/effects'
import { types, actions } from '../../redux/shop/shopReducer'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections')
    const snapshot = yield collectionRef.get()
    const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
    yield put(actions.fetchCollections.success(collectionsMap))
  } catch (error) {
    yield put(actions.fetchCollections.failure(error.message))
  }
}

export default function*() {
  yield takeLatest(types.FETCH_COLLECTIONS.REQUEST, fetchCollectionsAsync)
}
