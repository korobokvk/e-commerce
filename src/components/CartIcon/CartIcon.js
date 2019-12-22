import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { actions } from '../../redux/cart/cartReducer'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectCartItemsCount } from '../../selectors/cartSelectors'
import './CartIcon.scss'

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={() => toggleCartHidden()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
)
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(actions.toggleCartHidden()),
})
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
