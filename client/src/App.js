import React, { useEffect } from 'react'
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
import './App.css'

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(actions.checkUserSession()),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
