import styled from 'styled-components'
import StripeButton from '../../components/StripeButton/StripeButton'

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`
export const CheckoutPageHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`
export const CheckoutPageHeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`
export const CheckoutPageTotal = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`
export const CheckoutPageTestMessage = styled.div`
  color: red;
  margin-top: 40px;
  font-size: 24px;
  text-align: center;
`
export const CheckoutPageButtonContainer = styled(StripeButton)`
  margin-left: auto;
  margin-top: 50px;
`
