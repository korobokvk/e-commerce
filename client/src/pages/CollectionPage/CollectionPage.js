import React from 'react'
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
      <CollectionItemPageTitle>{title.toUpperCase()}</CollectionItemPageTitle>
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

export default CollectionPage
