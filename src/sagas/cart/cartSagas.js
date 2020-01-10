import { takeLatest, put, all } from 'redux-saga/effects'
import { actions as cartActions } from '../../redux/cart/cartReducer'
import { types as userTypes } from '../../redux/user/userReducer'

function* clearCart() {
  yield put(cartActions.clearCart())
}

export default function*() {
  yield all([yield takeLatest(userTypes.SIGN_OUT.SUCCESS, clearCart)])
}
