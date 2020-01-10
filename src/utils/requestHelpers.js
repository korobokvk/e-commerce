export const requestHelpers = (
  type,
  { startFetching = (data) => data, requestSuccess = (data) => data, requestFailure = (data) => data } = {},
) => ({
  [type.REQUEST]: (state, action) => startFetching(state, action),
  [type.SUCCESS]: (state, action) => requestSuccess(state, action),
  [type.FAILURE]: (state, action) => requestFailure(state, action),
})
