import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from '../../redux/shop/shopReducer'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase'
import CollectionOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../CollectionPage/CollectionPage'

const ShopPage = ({ match, updateCollections }) => {
  useEffect(() => {
    let unsibscribeFromSnapshot = null
    const collectionRef = firestore.collection('collections')
    unsibscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
    })
    return () => {
      // Unsubscribe from asyncObserver
      unsibscribeFromSnapshot = null
    }
  })
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(actions.updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
