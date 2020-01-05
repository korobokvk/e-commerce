import React from 'react'
import { withRouter } from 'react-router-dom'
import cn from 'classnames'
import './MenuItem.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl, match, history }) => (
  <div className={cn('menu-item', size)} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">SHOP NOW</h2>
    </div>
  </div>
)
export default withRouter(MenuItem)
