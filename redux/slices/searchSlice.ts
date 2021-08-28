import { createSlice } from "@reduxjs/toolkit";

const search = {
    current: "",
    previous: ""
}

export const searchSlice = createSlice({
    name: "search",
    initialState: search,
    reducers:{
        setSearchText: (state, action) =>{
            state.previous = state.current,
            state.current = action.payload
        }
    }
})

export const { setSearchText } = searchSlice.actions;

export default searchSlice.reducer