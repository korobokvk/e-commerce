import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { stripePublishKey } from '../../config'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful')
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error))
        alert('There was an issue with your payment. Please sure you use the provided credit cart')
      })
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
