import React from 'react'
import { FormInputContainer, FormInputInput, FormInputLabel } from './FormInputStyles'

const FormInput = ({ handleChange, label, ...rest }) => (
  <FormInputContainer>
    <FormInputInput onChange={handleChange} {...rest} />
    {label ? <FormInputLabel value={rest.value}>{label}</FormInputLabel> : null}
  </FormInputContainer>
)

export default FormInput
