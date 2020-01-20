import React from 'react'
import { withRouter } from 'react-router-dom'
import CollectionItem from '../CollectionItem/CollectionItem'
import { CollectionPreviewItem, CollectionPreviewContainer, CollectionPreviewTitle } from './CollectionPreviewStyles'

const CollectionPreview = ({ title, items, match, history }) => (
  <CollectionPreviewContainer>
    <CollectionPreviewTitle onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>
      {title.toUpperCase()}
    </CollectionPreviewTitle>
    <CollectionPreviewItem>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewItem>
  </CollectionPreviewContainer>
)

export default withRouter(React.memo(CollectionPreview))
