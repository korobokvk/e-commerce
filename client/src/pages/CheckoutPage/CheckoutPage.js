import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../selectors/cartSelectors'
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem'
import StripeButton from '../../components/StripeButton/StripeButton'

import {
  CheckoutPageButtonContainer,
  CheckoutPageHeader,
  CheckoutPageHeaderBlock,
  CheckoutPageTotal,
  CheckoutPageTestMessage,
  CheckoutPageContainer,
} from './CheckoutPageStyles'

const HEADER_SECTION_NAMES = [
  { name: 'Product', id: 1 },
  { name: 'Description', id: 2 },
  { name: 'Quantity', id: 3 },
  { name: 'Price', id: 4 },
  { name: 'Remove', id: 5 },
]
const CheckoutPage = ({ total, cartItems }) => (
  <CheckoutPageContainer>
    <CheckoutPageHeader>
      {HEADER_SECTION_NAMES.map(({ name, id }) => (
        <CheckoutPageHeaderBlock key={id}>
          <span>{name}</span>
        </CheckoutPageHeaderBlock>
      ))}
    </CheckoutPageHeader>
    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <CheckoutPageTotal>
      <span>TOTAL: ${total}</span>
    </CheckoutPageTotal>
    <CheckoutPageTestMessage>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: Any future date - CVC: Any 3 digits
    </CheckoutPageTestMessage>
    <CheckoutPageButtonContainer>
      <StripeButton price={total} />
    </CheckoutPageButtonContainer>
  </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
})
export default connect(mapStateToProps)(CheckoutPage)
