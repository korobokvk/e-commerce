import React from 'react'
import { createStructuredSelector } from 'reselect'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp'
import { selectCurrentUser } from './selectors/userSelectors'
import { actions } from './redux/user/userReducer'
import Header from './components/Header/Header'
import { auth, createUserProfileDocument } from './firebase/firebase'
import './App.css'

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
    const { currentUser } = this.props
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)} />
        </Switch>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(actions.setCurrentUser(user)),
})
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
