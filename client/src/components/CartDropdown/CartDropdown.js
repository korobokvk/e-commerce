import React from 'react'
import CartItem from '../CartItem/CartItem'
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

export default CartDropdown
