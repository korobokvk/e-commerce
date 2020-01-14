import styled, { css } from 'styled-components'

const LARGE = 'large'

const largeHeights = css`
  height: 380px;
`
const normalHeights = css`
  height: 240px;
`
const getSize = ({ size }) => (size === LARGE ? largeHeights : normalHeights)

export const MenuItemBackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ imageUrl }) => imageUrl});
`
export const MenuItemContent = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`
export const MenuItemTitle = styled.h1`
  font-weight: bold;
  margin: 0 6px 0;
  font-size: 22px;
  color: #4a4a4a;
  text-transform: capitalize;
`

export const MenuItemSubtitle = styled.h2`
  font-weight: lighter;
  font-size: 16px;
`
export const MenuItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  ${getSize}
  &:hover {
    cursor: pointer;

    ${MenuItemBackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${MenuItemContent} {
      opacity: 0.9;
    }
  }
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }
`
