import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        toggleToSearch:false,
        moveToMainPage:null
    },
    reducers:{
        toggleToGptSearch:(state)=>{
            state.toggleToSearch = !state.toggleToSearch;
            state.moveToMainPage = false;
        },
        isMoveToMainPage:(state)=>{
            state.moveToMainPage =true;
            state.toggleToSearch =false
        }
    }
})
export const {toggleToGptSearch,isMoveToMainPage} = gptSlice.actions;
export default gptSlice.reducer;