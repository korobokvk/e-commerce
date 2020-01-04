import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { stripePublishKey } from '../../config'
import './StripeButton.scss'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const onToken = (token) => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label="Pay now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pau now"
      token={onToken}
      stripeKey={stripePublishKey}
    />
  )
}

export default StripeButton
