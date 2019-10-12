import React from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase'
import './SignIn.scss'

class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = this.state

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: '', password: '' })
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with you email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            label="Email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
