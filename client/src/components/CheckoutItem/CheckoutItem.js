import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../redux/cart/cartReducer'
import {
  CheckoutItemArrowButton,
  CheckoutItemContainer,
  CheckoutItemImage,
  CheckoutItemImageContainer,
  CheckoutItemProperties,
  CheckoutItemQuantity,
  CheckoutItemRemoveButton,
} from './CheckoutItemStyles'
const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage src={imageUrl} alt="product" />
      </CheckoutItemImageContainer>
      <CheckoutItemProperties>{name}</CheckoutItemProperties>
      <CheckoutItemProperties>
        <CheckoutItemArrowButton onClick={() => removeItem(cartItem)}>&#10094;</CheckoutItemArrowButton>
        <CheckoutItemQuantity> {quantity}</CheckoutItemQuantity>
        <CheckoutItemArrowButton onClick={() => addItem(cartItem)}>&#10095;</CheckoutItemArrowButton>
      </CheckoutItemProperties>
      <CheckoutItemProperties>{price}</CheckoutItemProperties>
      <CheckoutItemRemoveButton onClick={() => clearItem(cartItem)}>&#10005;</CheckoutItemRemoveButton>
    </CheckoutItemContainer>
  )
}
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(actions.clearItemFromCart(item)),
  removeItem: (item) => dispatch(actions.removeItem(item)),
  addItem: (item) => dispatch(actions.addItem(item)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem)
