import React from 'react'
import MenuItem from '../MenuItem/MenuItem'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../selectors/directorySelectors'
import { DirectoryContainer } from './DirectoryStyles'

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryContainer>
)
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
})
export default connect(mapStateToProps)(Directory)
