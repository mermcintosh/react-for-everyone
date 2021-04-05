import React, { useEffect } from 'react'
import PropTypes from 'prop-types'


export function Movie({movie}) {

    useEffect(()=> {

    })

    return(
        <li>{movie.title}</li>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
}