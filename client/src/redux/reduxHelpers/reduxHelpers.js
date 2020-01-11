const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

export const createAction = (type) => (payload = {}) => ({ type, payload })

export const requestAction = (type, payload = {}) => {
  return { type, payload }
}
export const createRequestTypes = (base) => {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const createRequestAction = (types) => {
  return {
    request: (payload) => requestAction(types[REQUEST], payload),
    success: (payload) => requestAction(types[SUCCESS], payload),
    failure: (payload) => requestAction(types[FAILURE], payload),
  }
}

export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if ({}.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action)
  } else {
    return state
  }
}
