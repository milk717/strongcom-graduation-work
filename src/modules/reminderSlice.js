import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   value : 0,
}

export const reminderSlice = createSlice({
    name: 'reminder',
    initialState,
    reducers:{
        increment: (state)=>{
            state.value +=1
        },
        decrement: (state)=>{
            state.value +=1
        },
    }
});

export const {increment, decrement} = reminderSlice.actions

export default reminderSlice.reducer