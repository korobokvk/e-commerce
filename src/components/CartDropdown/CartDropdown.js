import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { actions } from '../../redux/cart/cartReducer'
import CartItem from '../CartItem/CartItem'
import { selectCartItems } from '../../selectors/cartSelectors'
import { CartDropdownContainer, CartItemContainer, EmptyMessage, CustomButtonContainer } from './CartDropdownStyles'

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <CartDropdownContainer>
    <CartItemContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
    </CartItemContainer>
    <CustomButtonContainer
      onClick={() => {
        toggleCartHidden()
        history.push('/checkout')
      }}
    >
      GO TO CHECKOUT
    </CustomButtonContainer>
  </CartDropdownContainer>
)
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})
const mapActionToProps = {
  toggleCartHidden: actions.toggleCartHidden,
}
export default withRouter(connect(mapStateToProps, mapActionToProps)(CartDropdown))
