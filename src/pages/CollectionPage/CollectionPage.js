import React from 'react'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { selectCollection } from '../../selectors/shopSelectors'
import CollectionItem from '../../components/CollectionItem/CollectionItem'
import './CollectionPage.scss'

const CollectionPage = ({ collection }) => {
  console.log(collection)
  const { title, items } = collection
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state, { match }) => ({
  collection: selectCollection(get(match, 'params.collectionId', null))(state),
})
export default connect(mapStateToProps)(CollectionPage)
