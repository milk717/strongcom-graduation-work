import {Switch, TextField, Typography} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import BasicBox from "../BasicBox";
import * as React from "react";
import styled from "styled-components";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";
import {endDateInput, startDateInput} from "../../modules/reminderSlice";
import {useNavigate} from "react-router-dom";

export default function ReminderDateInput(){
    const reminder = useSelector((state) => state.reminder);
    const [dateToggle, setDateToggle] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDateToggle = (e) => {
        setDateToggle(state => !state)
    }


    return(
        <>
            <BasicBox>
                <RowStack>
                    <Typography
                        variant="h6"
                        noWrap
                    >
                        날짜
                    </Typography>
                    <Switch
                        checked={dateToggle}
                        onChange={handleDateToggle}
                    />
                </RowStack>
                {
                    dateToggle &&
                    <>
                        <RowStack>
                            <NotificationsNoneIcon/>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={dayjs(reminder.startDate)}
                                    minDate={dayjs()}
                                    onChange={(newValue) => {
                                        dispatch(startDateInput(newValue.format()))
                                    }}
                                    inputFormat={"YYYY-MM-DD"}
                                    mask={"____-__-__"}

                                    renderInput={(params) => <TextField {...params} />}
                                />
                                ~
                                <DatePicker
                                    value={dayjs(reminder.endDate)}
                                    minDate={dayjs()}
                                    onChange={(newValue) => {
                                        dispatch(endDateInput(newValue.format()))
                                    }}
                                    inputFormat={"YYYY-MM-DD"}
                                    mask={"____-__-__"}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </RowStack>
                        <hr/>
                        <RowStack
                            justifyContent={'flex-start'}
                            topMargin='8px'
                            onClick={e=>navigate('repetition')}>
                            <RepeatOutlinedIcon/>
                            <Typography
                                variant="h6"
                                noWrap
                            >
                                반복 안함
                            </Typography>
                        </RowStack>
                    </>
                }
            </BasicBox>
        </>
    )
}

const DatePicker = styled(MuiDatePicker)`
  font-size: 16px;
  * {
    border: none;
  }
`

const RowStack = styled.div`
  display: flex;
  justify-content: ${props=>props.justifyContent || 'space-between'};
  align-items: center;
  margin-bottom: ${props => props.bottomMargin};
  margin-top: ${props => props.topMargin};
  flex-flow: row;
`