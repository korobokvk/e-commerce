import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'

import { actions } from './redux/user/userReducer'
import Header from './components/Header/Header'
import { auth, createUserProfileDocument } from './firebase/firebase'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    this.authStatus()
  }

  authStatus = () => {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      }
      setCurrentUser(userAuth)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
})
export default connect(null, mapDispatchToProps)(App)
