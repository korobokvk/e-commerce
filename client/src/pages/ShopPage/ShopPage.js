import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from '../../redux/shop/shopReducer'
import Spinner from '../../components/Spinner/Spinner'

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/CollectionsOverview/CollectionsOverviewContainer'),
)
const CollectionPageContainer = lazy(() => import('../CollectionPage/CollectionPageContainer'))

const ShopPage = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections()
  }, [fetchCollections])
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </Suspense>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(actions.fetchCollections.request()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
