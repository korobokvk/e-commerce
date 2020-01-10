import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdownContainer from '../CartDropdown/CartDropdownContainer'
import { selectCurrentUser } from '../../selectors/userSelectors'
import { actions } from '../../redux/user/userReducer'
import { selectCartHidden } from '../../selectors/cartSelectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './HeaderStyles'

const Header = ({ currentUser, hidden, signOut }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOut}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? <CartDropdownContainer /> : null}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(actions.signOut.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
