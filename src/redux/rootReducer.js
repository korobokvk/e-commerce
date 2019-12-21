import { combineReducers } from 'redux'
import userReducer, { NAME as UserReducer } from './user/userReducer'
import cartReducer, { NAME as CartReducer } from './cart/cartReducer'

export default combineReducers({
  [UserReducer]: userReducer,
  [CartReducer]: cartReducer,
})
