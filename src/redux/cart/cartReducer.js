import { createAction, createReducer } from '../reduxHelpers/reduxHelpers'
import { addItemToCart } from '../../utils/addItemToCart'
import { removeItemFromCart } from '../../utils/removeItemFromCart'

export const NAME = 'cart'

const initialState = {
  hidden: false,
  cartItems: [],
}
export const types = {
  TOGGLE_CART_HIDDEN: `${NAME}/TOGGLE_CART_HIDDEN`,
  ADD_ITEM: `${NAME}/ADD_ITEM`,
  CLEAR_ITEM_FROM_CART: `${NAME}/CLEAR_ITEM_FROM_CART`,
  REMOVE_ITEM: `${NAME}/REMOVE_ITEM`,
}

export const actions = {
  toggleCartHidden: createAction(types.TOGGLE_CART_HIDDEN),
  addItem: createAction(types.ADD_ITEM),
  clearItemFromCart: createAction(types.CLEAR_ITEM_FROM_CART),
  removeItem: createAction(types.REMOVE_ITEM),
}
export const handlers = {
  [types.TOGGLE_CART_HIDDEN]: (state) => ({ ...state, hidden: !state.hidden }),
  [types.ADD_ITEM]: (state, { payload }) => ({ ...state, cartItems: addItemToCart(state.cartItems, payload) }),
  [types.CLEAR_ITEM_FROM_CART]: (state, { payload }) => ({
    ...state,
    cartItems: state.cartItems.filter((cartItem) => cartItem.id !== payload.id),
  }),
  [types.REMOVE_ITEM]: (state, { payload }) => ({ ...state, cartItems: removeItemFromCart(state.cartItems, payload) }),
}

export default createReducer(initialState, handlers)
