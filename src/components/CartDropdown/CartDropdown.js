import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../selectors/cartSelectors'
import CustomButton from '../CustomButton/CustomButton'

import './CartDropdown.scss'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
export default connect(mapStateToProps)(CartDropdown)
