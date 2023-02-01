import {Switch, TextField, Typography} from "@mui/material";
import BasicBox from "../BasicBox";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {TimePicker as MuiTimePicker} from "@mui/x-date-pickers";
import {endTimeInput, startTimeInput} from "../../modules/reminderSlice";
import dayjs from "dayjs";

export default function ReminderTimeInput() {
    const reminder = useSelector((state) => state.reminder);
    const dispatch = useDispatch();
    const [timeToggle, setTimeToggle] = useState(false);

    const handleTimeToggle = (e) => {
        setTimeToggle(state => !state)
    }

    return (
        <>
            <BasicBox>
                <RowStack>
                    <Typography
                        variant="h6"
                        noWrap
                    >
                        시간
                    </Typography>
                    <Switch
                        checked={timeToggle}
                        onChange={handleTimeToggle}
                    />
                </RowStack>
                {
                    timeToggle &&
                    <>
                        <RowStack bottomMargin='8px' justifyContent='space-around'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker
                                    value={dayjs(reminder.startTime)}
                                    onChange={(newValue) => {
                                        dispatch(startTimeInput(newValue.format()))
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                                ~
                                <TimePicker
                                    value={dayjs(reminder.endTime)}
                                    onChange={(newValue) => {
                                        dispatch(endTimeInput(newValue.format()))
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </RowStack>
                    </>
                }
            </BasicBox>
        </>
    );
}

const RowStack = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: center;
  margin-bottom: ${props => props.bottomMargin};
`

const TimePicker = styled(MuiTimePicker)`
  * {
    margin:0;
    border: none;
  }
`