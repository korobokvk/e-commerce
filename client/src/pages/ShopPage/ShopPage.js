import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from '../../redux/shop/shopReducer'
import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverviewContainer'
import CollectionPageContainer from '../CollectionPage/CollectionPageContainer'

const ShopPage = ({ match, fetchCollections }) => {
  useEffect(() => {
    fetchCollections()
  }, [fetchCollections])
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(actions.fetchCollections.request()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
