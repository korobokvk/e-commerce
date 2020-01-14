import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../../redux/cart/cartReducer'

import {
  Name,
  Price,
  CollectionFooterContainer,
  CollectionItemContainer,
  ImageContainer,
  CustomButtonContainer,
} from './CollectionItemStyles'

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
    <CollectionItemContainer>
      <ImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooterContainer>
      <CustomButtonContainer onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButtonContainer>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(actions.addItem(item)),
})
export default connect(null, mapDispatchToProps)(CollectionItem)
