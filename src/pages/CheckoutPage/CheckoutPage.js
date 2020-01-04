import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../selectors/cartSelectors'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeButton from '../../components/StripeButton/StripeButton'
import './CheckoutPage.scss'

const HEADER_SECTION_NAMES = [
  { name: 'Product', id: 1 },
  { name: 'Description', id: 2 },
  { name: 'Quantity', id: 3 },
  { name: 'Price', id: 4 },
  { name: 'Remove', id: 5 },
]
const CheckoutPage = ({ total, cartItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      {HEADER_SECTION_NAMES.map(({ name, id }) => (
        <div key={id} className="header-block">
          <span>{name}</span>
        </div>
      ))}
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: Any future date - CVC: Any 3 digits
    </div>
    <StripeButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})
export default connect(mapStateToProps)(CheckoutPage)
