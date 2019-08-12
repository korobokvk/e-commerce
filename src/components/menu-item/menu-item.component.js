import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({ title, subtitle }) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <h2 className="subtitle">{subtitle}</h2>
    </div>
  </div>
)
export default MenuItem
