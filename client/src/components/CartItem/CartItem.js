import React from 'react'
import { CartItemContainer, CartItemImage, ItemDetailsContainer, ItemDetailsName } from './CartItemStyles'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <ItemDetailsName>{name}</ItemDetailsName>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default CartItem
