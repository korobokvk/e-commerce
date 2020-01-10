import { createReducer, createRequestTypes, createRequestAction } from '../reduxHelpers/reduxHelpers'
import { requestHelpers } from '../../utils/requestHelpers'
export const NAME = 'shop'

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: null,
}

export const types = {
  FETCH_COLLECTIONS: createRequestTypes(`${NAME}/FETCH_COLLECTIONS`),
}

export const actions = {
  fetchCollections: createRequestAction(types.FETCH_COLLECTIONS),
}

export const handlers = {
  ...requestHelpers(types.FETCH_COLLECTIONS, {
    requestSuccess: (state, { payload }) => ({ ...state, isFetching: false, collections: payload }),
    requestFailure: (state, { payload }) => ({ ...state, isFetching: false, errorMessage: payload }),
    startFetching: (state) => ({ ...state, isFetching: true }),
  }),
}

export default createReducer(initialState, handlers)
