import React from 'react'
import { FormInputContainer, FormInputInput, FormInputLabel } from './FormInputStyles'

const FormInput = ({ handleChange, label, value, ...rest }) => (
  <FormInputContainer>
    <FormInputInput onChange={handleChange} {...rest} />
    {label ? (
      <FormInputLabel value={value} {...rest}>
        {label}
      </FormInputLabel>
    ) : null}
  </FormInputContainer>
)

export default FormInput
