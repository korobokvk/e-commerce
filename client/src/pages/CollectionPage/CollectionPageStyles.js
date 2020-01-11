import styled from 'styled-components'
import CollectionItem from '../../components/CollectionItem/CollectionItem'

export const CollectionItemPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const CollectionItemPageTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`
export const CollectionItemPageItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`
export const CollectionItemPageItem = styled.div`
  margin-bottom: 30px;
`
