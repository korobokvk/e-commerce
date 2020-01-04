import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer, { NAME as UserReducer } from './user/userReducer'
import cartReducer, { NAME as CartReducer } from './cart/cartReducer'
import directoryReducer, { NAME as DirectoryReducer } from './directory/directoryReducer'
import shopReducer, { NAME as ShopReducer } from './shop/shopReducer'

const persistConfig = {
  key: 'root',
  storage,
  whiteList: [CartReducer],
}

const rootReducer = combineReducers({
  [UserReducer]: userReducer,
  [CartReducer]: cartReducer,
  [DirectoryReducer]: directoryReducer,
  [ShopReducer]: shopReducer,
})

export default persistReducer(persistConfig, rootReducer)
