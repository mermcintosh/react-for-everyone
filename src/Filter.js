import React from 'react'
import PropTypes from 'prop-types'

export function Filter({setFilter, filter}){
    return(
        <input 
            onChange={(e) => setFilter(e.target.value)} 
            value={filter}
        />

    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
}