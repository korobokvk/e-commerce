import React from 'react'
import { CustomButtonContainer } from './CustomButtonStyles'

const CustomButton = ({ children, ...rest }) => <CustomButtonContainer {...rest}>{children}</CustomButtonContainer>

export default CustomButton
