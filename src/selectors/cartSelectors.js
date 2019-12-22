import { createSelector } from 'reselect'

const selectCart = ({ cart }) => cart

export const selectCartHidden = createSelector(selectCart, (cart) => cart.hidden)
export const selectCartItems = createSelector(selectCart, (cart) => cart.cartItems)
export const selectCartItemsCount = createSelector(selectCart, ({ cartItems }) =>
  cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.quantity, 0),
)
