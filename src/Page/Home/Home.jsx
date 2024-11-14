import React from 'react'
import Genre from '../../components/Genre/Genre'
import MovieList from '../../components/MovieList/MovieList'
import '../Home/Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <Genre/>
      <MovieList/>
    </div>
  )
}

export default Home