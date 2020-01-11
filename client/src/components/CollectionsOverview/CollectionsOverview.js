import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionForPreview } from '../../selectors/shopSelectors'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import { CollectionsOverviewContainer } from './CollectionsOverviewStyles'

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
)
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
})
export default connect(mapStateToProps)(CollectionsOverview)
