import { all, call } from 'redux-saga/effects'
import shopSagas from './shop/shopSagas'
import userSagas from './user/userSagas'
import cartSaga from './cart/cartSagas'

export default function* rootSaga() {
  yield all([call(shopSagas), call(userSagas), call(cartSaga)])
}
