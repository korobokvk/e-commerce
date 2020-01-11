import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { actions } from '../../redux/user/userReducer'
import { SignInButtons, SignInContainer, SignInTitle } from './SignInStyles'

const SignIn = ({ googleSignIn, emailSignIn }) => {
  const [credentials, setCredential] = useState({
    email: '',
    password: '',
  })

  const signIn = async () => {
    const { email, password } = credentials
    emailSignIn(email, password)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    signIn()
  }

  const handleChange = (event) => {
    const { value, name } = event.target
    setCredential({ ...credentials, [name]: value })
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with you email and password.</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" label="Email" type="email" value={credentials.email} onChange={handleChange} required />
        <FormInput
          name="password"
          label="Password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />

        <SignInButtons>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={googleSignIn} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </SignInButtons>
      </form>
    </SignInContainer>
  )
}
const mapDispatchToProps = (dispatch) => ({
  googleSignIn: () => dispatch(actions.googleSignIn()),
  emailSignIn: (email, password) => dispatch(actions.emailSignIn({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
