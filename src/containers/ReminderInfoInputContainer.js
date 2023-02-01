import styled from "styled-components";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import ReminderTitleInput from "../components/AddPage/ReminderTitleInput";
import ReminderDateInput from "../components/AddPage/ReminderDateInput";
import ReminderTimeInput from "../components/AddPage/ReminderTimeInput";
import BottomTwoButton from "../components/AddPage/BottomTwoButton";
import {initReminder, postReminderAsync} from "../modules/reminderSlice";
import {useNavigate} from "react-router-dom";
import {initAddPageToggleState} from "../modules/inputStateSlice";

export default function ReminderInfoInputContainer() {
    const reminder = useSelector((state) => state.reminder);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCancel = () => {
        dispatch(initReminder());
        navigate('/home');
    }

    const handleSubmit = () => {
        dispatch(postReminderAsync(reminder));
        dispatch(initAddPageToggleState());
        navigate('/home')
    }

    return (
        <>
            <ReminderTitleInput/>
            <ReminderDateInput/>
            <ReminderTimeInput/>
            <footer>
                  <BottomTwoButton
                    secondBtnName={'저장'}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                />
            </footer>
        </>
    );
}
