import React from 'react'
import Spinner from '../../components/Spinner/Spinner'

const WithSpinner = (WrappedComponent) => ({ isLoading, ...rest }) =>
  isLoading ? <Spinner /> : <WrappedComponent {...rest} />

export default WithSpinner
