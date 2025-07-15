import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        toggleToSearch:false
    },
    reducers:{
        toggleToGptSearch:(state)=>{
            state.toggleToSearch = !state.toggleToSearch
        }
    }
})
export const {toggleToGptSearch} = gptSlice.actions;
export default gptSlice.reducer;