import { connect } from 'react-redux'
import { compose } from 'redux'
import { get } from 'lodash'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionsLoaded, selectCollection } from '../../selectors/shopSelectors'
import WithSpinner from '../../HOC/WithSpinner/WithSpinner'
import CollectionPage from './CollectionPage'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
  collection: (state, { match }) => selectCollection(get(match, 'params.collectionId', null))(state),
})

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage)

export default CollectionPageContainer
