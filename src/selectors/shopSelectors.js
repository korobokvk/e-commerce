import { createSelector } from 'reselect'
import { COLLECTION_ID_MAP } from '../constants/collectionIdMap'

const selectShop = (state) => state.shop

export const selectShopCollections = createSelector(selectShop, (shop) => shop.collections)

export const selectCollection = (collectionParam) =>
  createSelector(selectShopCollections, (collections) =>
    collections.find((collection) => collection.id === COLLECTION_ID_MAP[collectionParam]),
  )
