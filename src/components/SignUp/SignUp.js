import React, { useState, useRef } from 'react'
import { connect } from 'react-redux'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { actions } from '../../redux/user/userReducer'
import { SignUpContainer, SignUpTitle } from './SignUpStyles'

const SignUp = ({ signUp }) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const signUpDetails = (email, displayName, password, event) => {
    signUp(email, password, displayName)

    // setCredentials({
    //   displayName: '',
    //   email: '',
    //   password: '',
    //   confirmPassword: '',
    // })
    //form.reset()
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { email, displayName, password, confirmPassword } = credentials

    if (password !== confirmPassword) {
      alert("Password don't match")
      return
    }

    signUpDetails(email, displayName, password, event)
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setCredentials({ ...credentials, [name]: value })
  }

  const formConfig = [
    {
      type: 'text',
      name: 'displayName',
      value: credentials.displayName,
      onChange: handleChange,
      label: 'Display Name',
      id: 1,
    },
    {
      type: 'email',
      name: 'email',
      value: credentials.email,
      onChange: handleChange,
      label: 'Email',
      id: 2,
    },
    {
      type: 'password',
      name: 'password',
      value: credentials.password,
      onChange: handleChange,
      label: 'Password',
      id: 3,
    },
    {
      type: 'password',
      name: 'confirmPassword',
      value: credentials.confirmPassword,
      onChange: handleChange,
      label: 'Confirm Password',
      id: 4,
    },
  ]
  return (
    <SignUpContainer>
      <SignUpTitle>I do not have a account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        {formConfig.map((formValue) => (
          <FormInput {...formValue} required key={formValue.id} />
        ))}
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signUp: (email, password, displayName) => dispatch(actions.signUp.request({ email, password, displayName })),
})
export default connect(null, mapDispatchToProps)(SignUp)
