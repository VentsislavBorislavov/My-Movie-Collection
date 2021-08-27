import { createSlice, EmptyObject } from "@reduxjs/toolkit";
import { Movie } from "../../interfaces";

const initialState: [] | Movie[] = [];

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers:{
        setMovies: (state, action) => {
            return action.payload.map(({show}: any) => ({
                id: show.id,
                images: show.image,
                title: show.name,
                year: show.premiered,
                description: show.summary,
                genres: show.genres,
                duration: show.runtime,
                link: show.officialSite
            }))
        }
    }
})

export const {setMovies} = movieSlice.actions;

export default movieSlice.reducer;

