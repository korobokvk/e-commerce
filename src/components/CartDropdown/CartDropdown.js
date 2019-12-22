import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { actions } from '../../redux/cart/cartReducer'
import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../selectors/cartSelectors'
import CustomButton from '../CustomButton/CustomButton'

import './CartDropdown.scss'

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        toggleCartHidden()
        history.push('/checkout')
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
const mapActionToProps = {
  toggleCartHidden: actions.toggleCartHidden,
}
export default withRouter(connect(mapStateToProps, mapActionToProps)(CartDropdown))
