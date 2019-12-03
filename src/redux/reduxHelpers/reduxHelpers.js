export const createAction = (type) => (payload = {}) => ({ type, payload })

export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if ({}.hasOwnProperty.call(handlers, action.type)) {
    return handlers[action.type](state, action)
  } else {
    return state
  }
}
