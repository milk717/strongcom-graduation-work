import {combineReducers} from "redux";
import {reminderSlice} from "./reminderSlice";

const rootReducer = combineReducers({
    reminder: reminderSlice.reducer,
});

export default rootReducer;