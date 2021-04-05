import React, {useState, useEffect} from 'react'
import {Movie} from './Movie'
import {Filter} from '../Filter'

//a Ref is a reference to anything


const API_URL = 
    'https://api.themoviedb.org/3/discover/movie?api_key=2220d5d9619cf7cc07b1129822f94d9f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'

export function MoviesList(){

    const [filter, setFilter] = useState("")
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL)
            const movies = await res.json()
            setMovies(movies.results)
        } catch (e) {
            console.error(e)
        }
    }

    useEffect( () => {
        getMovies()
    }, [])


    return(
        <div>
            <Filter filter={filter} setFilter={setFilter}/>            
                <ul>
               {movies.filter((movie) => {
                  return movie.title.toLowerCase().includes(filter.toLowerCase()) 
               }).map((movie) => {
                   return (
                       <Movie key={movie.id} movie={movie}/>
                   )
               })}
            </ul>
        </div>
    )
}