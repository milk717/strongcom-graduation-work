import {combineReducers} from "redux";
import {reminderSlice} from "./reminderSlice";
import {jsonApi} from "../api/jsonApi";

const rootReducer = combineReducers({
    reminder: reminderSlice.reducer,
    [jsonApi.reducerPath]: jsonApi.reducer,
});

export default rootReducer;