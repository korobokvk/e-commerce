import { createAction, createReducer } from '../reduxHelpers/reduxHelpers'
import { addItemToCart } from '../../utils/addItemToCart'

export const NAME = 'cart'

const initialState = {
  hidden: false,
  cartItems: [],
}
export const types = {
  TOGGLE_CART_HIDDEN: `${NAME}/TOGGLE_CART_HIDDEN`,
  ADD_ITEM: `${NAME}/ADD_ITEM`,
}

export const actions = {
  toggleCartHidden: createAction(types.TOGGLE_CART_HIDDEN),
  addItem: createAction(types.ADD_ITEM),
}
export const handlers = {
  [types.TOGGLE_CART_HIDDEN]: (state) => ({ ...state, hidden: !state.hidden }),
  [types.ADD_ITEM]: (state, { payload }) => ({ cartItems: addItemToCart(state.cartItems, payload) }),
}

export default createReducer(initialState, handlers)
