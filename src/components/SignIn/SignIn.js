import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase'
import { SignInButtons, SignInContainer, SignInTitle } from './SignInStyles'
const SignIn = () => {
  const [credentials, setCredential] = useState({
    email: '',
    password: '',
  })

  const signIn = async () => {
    const { email, password } = credentials
    if (email && password) {
      await auth.signInWithEmailAndPassword(email, password)
      setCredential({ email: '', password: '' })
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      signIn()
    } catch (err) {
      console.error(err)
    }
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
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </SignInButtons>
      </form>
    </SignInContainer>
  )
}

export default SignIn
