import { createSlice } from "@reduxjs/toolkit";

const activeLink = createSlice({
    name : "activeSec",
    
    initialState : {
        activeSection : "home",
        timeOfLastClick : 0,
    },

    reducers : {
        setActiveSection(state, action){
            state.activeSection = action.payload;
        },
        setTimeOfLastClick(state, action){
            state.timeOfLastClick = action.payload;
      
        }
    }
})

export const {setActiveSection, setTimeOfLastClick} = activeLink.actions;

export default activeLink.reducer;