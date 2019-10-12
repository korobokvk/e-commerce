import React from 'react'
import FormInput from '../FormInput/FormInput'
import CustomButton from '../CustomButton/CustomButton'
import { auth, createUserProfileDocument } from '../../firebase/firebase'
import './SignUp.scss'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { email, displayName, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert("Password don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (err) {
      console.error(err)
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({ [name]: value })
  }
  render() {
    const { email, displayName, password, confirmPassword } = this.state

    const formConfig = [
      {
        type: 'text',
        name: 'displayName',
        value: displayName,
        onChange: this.handleChange,
        label: 'Display Name',
        id: 1,
      },
      {
        type: 'email',
        name: 'email',
        value: email,
        onChange: this.handleChange,
        label: 'Email',
        id: 2,
      },
      {
        type: 'password',
        name: 'password',
        value: password,
        onChange: this.handleChange,
        label: 'Password',
        id: 3,
      },
      {
        type: 'password',
        name: 'confirmPassword',
        value: confirmPassword,
        onChange: this.handleChange,
        label: 'Confirm Password',
        id: 4,
      },
    ]
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          {formConfig.map((formValue, { id }) => (
            <FormInput {...formValue} required key={id} />
          ))}
          <CustomButton type="submit"></CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
