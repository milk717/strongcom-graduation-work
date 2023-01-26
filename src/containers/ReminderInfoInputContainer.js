import styled from "styled-components";
import {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import ReminderTitleInput from "../components/AddPage/ReminderTitleInput";
import ReminderDateInput from "../components/AddPage/ReminderDateInput";
import ReminderTimeInput from "../components/AddPage/ReminderTimeInput";

export default function ReminderInfoInputContainer() {
    const reminder = useSelector((state) => state.reminder);
    const dispatch = useDispatch();
    const [timeToggle, setTimeToggle] = useState(true);

    return (
        <>
            <ReminderTitleInput/>
            <ReminderDateInput/>
            <ReminderTimeInput/>
        </>
    );
}

const RowStack = styled.div`
  display: flex;
  justify-content: ${props=>props.justifyContent || 'space-between'};
  align-items: center;
  margin-bottom: ${props => props.bottomMargin};
`