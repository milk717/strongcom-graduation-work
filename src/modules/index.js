import {combineReducers} from "redux";
import {reminderSlice} from "./reminderSlice";

const rootReducer = combineReducers({
    reminder: reminderSlice,
});

export default rootReducer;