import { combineReducers } from 'redux'
import userReducer, { NAME as UserReducer } from './user/userReducer'

export default combineReducers({
  [UserReducer]: userReducer,
})
