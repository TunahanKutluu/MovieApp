import React , { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../redux/store'
import { getMovieList } from '../../redux/slices/movieListSlice';
import MovieCard from '../MovieCard/MovieCard';
import '../MovieList/MovieList.css'
import Loading from '../Loading/Loading';

const MovieList = () => {

  const dispatch = useDispatch();
  const { movieList , isLoading } = useSelector( (store) => store.movieList )
  

  useEffect(() => {

     dispatch(getMovieList())
  
}, [])

  return (
    <div className='Movie-List'>
      <ul>
        {
           ! isLoading ?
          movieList && movieList.map((movie, index)=> (
            <MovieCard key={movie.id} movie={movie}/>
          )) : 
          <Loading/>
        
        }
      </ul>
    
    </div>
  )
}

export default MovieList