import React from 'react'
import SignIn from '../../components/SignIn/SignIn'
import SignUp from '../../components/SignUp/SignUp'
import { SigInAndSignUpContainer } from './SignInAndSignUpStyles'

const SignInAndSignUp = () => (
  <SigInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SigInAndSignUpContainer>
)

export default SignInAndSignUp
