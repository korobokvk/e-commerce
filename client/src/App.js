import React, { useEffect, lazy, Suspense } from 'react'
import { createStructuredSelector } from 'reselect'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectCurrentUser } from './selectors/userSelectors'
import { actions } from './redux/user/userReducer'
import Header from './components/Header/Header'
import { GlobalStyle } from './globalStyle'
import Spinner from './components/Spinner/Spinner'
import ErrorBoundary from './HOC/ErrorBoundary/ErrorBoundary'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const ShopPage = lazy(() => import('./pages/ShopPage/ShopPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage/CheckoutPage'))
const SignInAndSignUp = lazy(() => import('./pages/SignInAndSignUp/SignInAndSignUp'))

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/signin" render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUp />)} />
          </Suspense>
        </ErrorBoundary>
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
