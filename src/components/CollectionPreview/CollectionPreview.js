import React from 'react'
import './CollectionPreview.scss'
import CollectionItem from '../CollectionItem/CollectionItem'

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item, { id }) => (
          <CollectionItem key={id} item={item} />
        ))}
    </div>
  </div>
)

export default CollectionPreview
