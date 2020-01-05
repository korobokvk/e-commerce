import styled from 'styled-components'
import CustomButton from '../CustomButton/CustomButton'

const getImageUrl = ({ imageUrl }) => `url(${imageUrl})`

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`
export const Price = styled.span`
  width: 10%;
`
export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${getImageUrl};
`
export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`
export const CustomButtonContainer = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`
export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    ${ImageContainer} {
      opacity: 0.8;
    }

    ${CustomButtonContainer} {
      display: flex;
      opacity: 0.85;
    }
  }
`
