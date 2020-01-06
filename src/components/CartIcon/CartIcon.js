import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { actions } from '../../redux/cart/cartReducer'
import { selectCartItemsCount } from '../../selectors/cartSelectors'
import { CartIconContainer, ShoppingIconContainer, ItemCount } from './CartIconStyles'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={() => toggleCartHidden()}>
    <ShoppingIconContainer />
    <ItemCount> {itemCount} </ItemCount>
  </CartIconContainer>
)
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden()),
})
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
