import { createAction, createReducer } from '../reduxHelpers/reduxHelpers'
import { addItemToCart } from '../../utils/addItemToCart'
import { removeItemFromCart } from '../../utils/removeItemFromCart'

export const NAME = 'cart'

const initialState = {
  hidden: false,
  cartItems: [],
}
export const types = {
  ADD_ITEM: `${NAME}/ADD_ITEM`,
  CLEAR_CART: `${NAME}/CLEAR_CART`,
  REMOVE_ITEM: `${NAME}/REMOVE_ITEM`,
  TOGGLE_CART_HIDDEN: `${NAME}/TOGGLE_CART_HIDDEN`,
  CLEAR_ITEM_FROM_CART: `${NAME}/CLEAR_ITEM_FROM_CART`,
}

export const actions = {
  addItem: createAction(types.ADD_ITEM),
  clearCart: createAction(types.CLEAR_CART),
  removeItem: createAction(types.REMOVE_ITEM),
  toggleCartHidden: createAction(types.TOGGLE_CART_HIDDEN),
  clearItemFromCart: createAction(types.CLEAR_ITEM_FROM_CART),
}
export const handlers = {
  [types.ADD_ITEM]: (state, { payload }) => ({ ...state, cartItems: addItemToCart(state.cartItems, payload) }),
  [types.CLEAR_CART]: (state) => ({ ...state, cartItems: [] }),
  [types.REMOVE_ITEM]: (state, { payload }) => ({ ...state, cartItems: removeItemFromCart(state.cartItems, payload) }),
  [types.TOGGLE_CART_HIDDEN]: (state) => ({ ...state, hidden: !state.hidden }),
  [types.CLEAR_ITEM_FROM_CART]: (state, { payload }) => ({
    ...state,
    cartItems: state.cartItems.filter((cartItem) => cartItem.id !== payload.id),
  }),
}

export default createReducer(initialState, handlers)
