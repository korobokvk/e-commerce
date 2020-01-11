import React from 'react'
import { withRouter } from 'react-router-dom'
import {
  MenuItemBackgroundImage,
  MenuItemContainer,
  MenuItemContent,
  MenuItemSubtitle,
  MenuItemTitle,
} from './MenuItemStyles'

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <MenuItemBackgroundImage imageUrl={imageUrl} />
    <MenuItemContent>
      <MenuItemTitle>{title}</MenuItemTitle>
      <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
    </MenuItemContent>
  </MenuItemContainer>
)
export default withRouter(MenuItem)
