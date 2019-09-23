import React from 'react'
import cn from 'classnames'
import './CustomButton.scss'

const CustomButton = ({ children, isGoogleSignIn, ...rest }) => (
  <button className={cn('custom-button', { 'google-sign-in': isGoogleSignIn })} {...rest}>
    {children}
  </button>
)
export default CustomButton
