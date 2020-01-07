import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from '../../redux/shop/shopReducer'
import WithSpinner from '../../HOC/WithSpinner/WithSpinner'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'
import CollectionOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../CollectionPage/CollectionPage'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({ match, updateCollections }) => {
  const [isLoading, setLoadingState] = useState(true)
  useEffect(() => {
    const collectionRef = firestore.collection('collections')
    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      setLoadingState(false)
    })
  })
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(actions.updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
