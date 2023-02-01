import styled from "styled-components";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import ReminderTitleInput from "../components/AddPage/ReminderTitleInput";
import ReminderDateInput from "../components/AddPage/ReminderDateInput";
import ReminderTimeInput from "../components/AddPage/ReminderTimeInput";
import BottomTwoButton from "../components/AddPage/BottomTwoButton";

export default function ReminderInfoInputContainer() {
    const reminder = useSelector((state) => state.reminder);
    const dispatch = useDispatch();

    return (
        <>
            <ReminderTitleInput/>
            <ReminderDateInput/>
            <ReminderTimeInput/>
            <footer>
                <BottomTwoButton
                    secondBtnName={'저장'}
                    // onSubmit={() => dispatch(postReminder())}
                />
            </footer>
        </>
    );
}

const RowStack = styled.div`
  display: flex;
  justify-content: ${props=>props.justifyContent || 'space-between'};
  align-items: center;
  margin-bottom: ${props => props.bottomMargin};
`
