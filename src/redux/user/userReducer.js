import { createReducer, createRequestTypes, createRequestAction, createAction } from '../reduxHelpers/reduxHelpers'
import { requestHelpers } from '../../utils/requestHelpers'
export const NAME = 'user'

const initialState = {
  currentUser: null,
  error: null,
}
const requestSuccess = (state, { payload }) => ({ ...state, currentUser: payload })
const requestFailure = (state, { payload }) => ({ ...state, error: payload })
const signOutSuccess = (state) => ({ ...state, currentUser: null })

export const types = {
  SIGN_IN: createRequestTypes(`${NAME}/SIGN_IN`),
  SIGN_UP: createRequestTypes(`${NAME}/SIGN_UP`),
  SIGN_OUT: createRequestTypes(`${NAME}/SIGN_OUT`),
  GOOGLE_SIGN_IN: `${NAME}/GOOGLE_SIGN_IN`,
  EMAIL_SIGN_IN: `${NAME}/EMAIL_SIGN_IN`,
  CHECK_USER_SESSION: `${NAME}/CHECK_USER_SESSION`,
}

export const actions = {
  signIn: createRequestAction(types.SIGN_IN),
  signUp: createRequestAction(types.SIGN_UP),
  signOut: createRequestAction(types.SIGN_OUT),
  googleSignIn: createAction(types.GOOGLE_SIGN_IN),
  emailSignIn: createAction(types.EMAIL_SIGN_IN),
  checkUserSession: createAction(types.CHECK_USER_SESSION),
}

export const handlers = {
  ...requestHelpers(types.SIGN_IN, {
    requestSuccess,
    requestFailure,
  }),
  ...requestHelpers(types.SIGN_OUT, {
    requestSuccess: signOutSuccess,
  }),
  ...requestHelpers(types.SIGN_UP, {
    requestSuccess,
  }),
}

export default createReducer(initialState, handlers)
