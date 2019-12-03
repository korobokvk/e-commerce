import { createAction, createReducer } from '../reduxHelpers/reduxHelpers'

export const NAME = 'user'

export const initialState = {
  currentUser: null,
}

export const types = {
  SET_CURRENT_USER: `${NAME}/SET_CURRENT_USER`,
}

export const actions = {
  setCurrentUser: createAction(types.SET_CURRENT_USER),
}

export const handlers = {
  [types.SET_CURRENT_USER]: (state, { payload }) => ({ ...state, currentUser: payload }),
}

export default createReducer(initialState, handlers)
