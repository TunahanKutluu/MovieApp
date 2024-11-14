import { configureStore } from "@reduxjs/toolkit";
import genreSlice from './slices/genreSlice'
import movieListSlice from './slices/movieListSlice'

export const store = configureStore({
    reducer: {
        genre: genreSlice,
        movieList : movieListSlice,
    },
})