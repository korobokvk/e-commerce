import { createReducer, createAction } from '../reduxHelpers/reduxHelpers'
export const NAME = 'shop'

const initialState = { collections: null }

export const types = {
  UPDATE_COLLECTIONS: `${NAME}/UPDATE_COLLECTIONS`,
}

export const actions = {
  updateCollections: createAction(types.UPDATE_COLLECTIONS),
}

export const handlers = {
  [types.UPDATE_COLLECTIONS]: (state, { payload }) => ({ ...state, collections: payload }),
}

export default createReducer(initialState, handlers)
