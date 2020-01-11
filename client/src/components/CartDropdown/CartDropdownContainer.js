import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { selectCartItems } from '../../selectors/cartSelectors'
import { actions } from '../../redux/cart/cartReducer'
import CartDropdown from './CartDropdown'

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
const mapActionToProps = {
  toggleCartHidden: actions.toggleCartHidden,
}

const CartDropdownContainer = compose(connect(mapStateToProps, mapActionToProps), withRouter)(CartDropdown)

export default CartDropdownContainer
