import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    list: [
        {id: 0, title: '대추차 마시고 나가기', subtitle: '오늘 한번만 알림'},
        {id: 1, title: '맥북 충전기 챙기기', subtitle: '매일 오전 11이 이전 외출 시 알림'},
        {id: 2, title: '텀블러 챙기기', subtitle: '매일 상시 알림'},
    ],
}

export const reminderSlice = createSlice({
    name: 'reminder',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value += 1
        },
    }
});

export const {increment, decrement} = reminderSlice.actions

export default reminderSlice.reducer