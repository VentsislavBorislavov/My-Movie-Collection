import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import moviesReducer from "./slices/moviesSlice"

export default configureStore({
    reducer:{
        search: searchReducer,
        movies: moviesReducer
    }
})