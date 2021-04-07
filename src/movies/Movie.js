import React, { useEffect } from 'react'
import PropTypes from 'prop-types'


export function Movie({movie, config}) {

    useEffect(()=> {

    })

    return(
        <li>
            {config.images?.base_url && (
            <img 
                src={config.images.base_url + "w342" + movie.poster_path} 
                alt={movie.title + "Poster"}/>
            )}
            <h3>{movie.title}</h3>
        </li>
    )
}

Movie.propTypes = {
    movie: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
}