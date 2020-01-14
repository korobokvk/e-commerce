import styled from 'styled-components'
import CollectionItem from '../../components/CollectionItem/CollectionItem'

export const CollectionItemPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`
export const CollectionItemPageTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`
export const CollectionItemPageItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
export const CollectionItemPageItem = styled.div`
  margin-bottom: 30px;
`
