import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../redux/cart/cartReducer'
import './CheckoutItem.scss'

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, price, quantity } = cartItem
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="product" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItem(cartItem)} className="arrow">
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div onClick={() => addItem(cartItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItem(cartItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(actions.clearItemFromCart(item)),
  removeItem: (item) => dispatch(actions.removeItem(item)),
  addItem: (item) => dispatch(actions.addItem(item)),
})
export default connect(null, mapDispatchToProps)(CheckoutItem)
