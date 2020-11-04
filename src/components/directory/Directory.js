import React from 'react';
import './Directory.styles.scss';
import MenuItem from '../menu-item/MenuItem';
//=====> REDUX 
import { connect } from 'react-redux';
//=====> REDUX RESELECT 
import { createStructuredSelector } from 'reselect' 
import { selectDirectoryItems } from '../../redux/directory/directory.selectors'

const Directory = ({ items }) => {
    return (
        <div className="directory-menu">
            {items.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} { ...otherSectionProps }/>
            ))}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: selectDirectoryItems
})
export default connect(mapStateToProps)(Directory);