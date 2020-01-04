import { createReducer } from '../reduxHelpers/reduxHelpers'
import SHOP_DATA from '../../constants/shop.data'
export const NAME = 'shop'

const initialState = { collections: SHOP_DATA }

export default createReducer(initialState, {})
