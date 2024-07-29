import { combineReducers } from "@reduxjs/toolkit";

import activeReducer from "./slices/navSlice";

const rootReducer = combineReducers({
    activeSec : activeReducer,
})

export default rootReducer;