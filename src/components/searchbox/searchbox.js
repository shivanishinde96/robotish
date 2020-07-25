import React from 'react'
import './search-box.styles.css'

const Searchbox = ({handleChange}) => {
    return (
        <div className="search">
        <input type='text' onChange={handleChange} 
      placeholder="Search Robots" className="search-input"/>
        </div>
    )
}

export default Searchbox
