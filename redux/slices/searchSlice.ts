import { createSlice } from "@reduxjs/toolkit";

const movieSearchQuery = "";

export const searchSlice = createSlice({
    name: "search",
    initialState: movieSearchQuery,
    reducers:{
        setMovieSearchQuery: (state, action) =>{
            return action.payload;
        }
    }
})

export const { setMovieSearchQuery } = searchSlice.actions;

export default searchSlice.reducer