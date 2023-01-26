import {createSlice} from '@reduxjs/toolkit';
import dayjs from "dayjs";

const initialState = {
    title: '',
    content: '',
    startDate: dayjs().format(),
    endDate: dayjs().format(),
    startTime: dayjs().format(),
    endTime: dayjs().format(),
}

export const reminderSlice = createSlice({
    name: 'reminder',
    initialState,
    reducers: {
        titleInput: (state, action) => {
            state.title = action.payload;
        },
        contentInput: (state,action) => {
            state.content = action.payload;
        },
        startDateInput: (state,action) => {
            state.startDate = action.payload;
        },
        endDateInput: (state,action) => {
            state.endDate = action.payload;
        },
        startTimeInput: (state,action) => {
            state.startDate = action.payload;
        },
        endTimeInput: (state,action) => {
            state.endDate = action.payload;
        },
    }
});

export const {titleInput, contentInput,startDateInput,endDateInput,startTimeInput,endTimeInput} = reminderSlice.actions

export default reminderSlice.reducer