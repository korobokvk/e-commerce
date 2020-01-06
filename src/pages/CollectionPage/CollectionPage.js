import React from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { selectCollection } from '../../selectors/shopSelectors'
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import {
  CollectionItemPageContainer,
  CollectionItemPageItem,
  CollectionItemPageItemsContainer,
  CollectionItemPageTitle,
} from './CollectionPageStyles'

const CollectionPage = ({ collection }) => {
  const { title, items } = collection
  return (
    <CollectionItemPageContainer>
      <CollectionItemPageTitle>{title}</CollectionItemPageTitle>
      <CollectionItemPageItemsContainer>
        {items.map((item) => (
          <CollectionItemPageItem key={item.id}>
            <CollectionItem item={item} />
          </CollectionItemPageItem>
        ))}
      </CollectionItemPageItemsContainer>
    </CollectionItemPageContainer>
  )
}

const mapStateToProps = (state, { match }) => ({
  collection: selectCollection(get(match, 'params.collectionId', null))(state),
})
export default connect(mapStateToProps)(CollectionPage)
