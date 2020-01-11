import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import { CollectionPreviewItem, CollectionPreviewContainer, CollectionPreviewTitle } from './CollectionPreviewStyles'

const CollectionPreview = ({ title, items }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle>{title}</CollectionPreviewTitle>
    <CollectionPreviewItem>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewItem>
  </CollectionPreviewContainer>
)

export default CollectionPreview
