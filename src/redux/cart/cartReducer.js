import { createAction, createReducer } from '../reduxHelpers/reduxHelpers'

export const NAME = 'cart'

const initialState = {
  hidden: false,
}
export const types = {
  TOGGLE_CART_HIDDEN: `${NAME}/TOGGLE_CART_HIDDEN`,
}

export const actions = {
  toggleCartHidden: createAction(types.TOGGLE_CART_HIDDEN),
}
export const handlers = {
  [types.TOGGLE_CART_HIDDEN]: (state) => ({ ...state, hidden: !state.hidden }),
}

export default createReducer(initialState, handlers)
