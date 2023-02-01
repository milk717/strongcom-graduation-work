import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import {repetitionList} from "../../resources/string";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import BasicBox from "../common/BasicBox";
import styled from "styled-components";
import {Button} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {RepetitionDayInput, RepetitionPeriodInput} from "../../modules/reminderSlice";

export default function RepetitionCheckboxList(){
    const reminder = useSelector((state) => state.reminder);
    const dispatch = useDispatch();

    const handlePeriodClick = (event, period) =>{
        dispatch(RepetitionPeriodInput(period))
    }

    const handleDayClick = (event, day) =>{
        dispatch(RepetitionDayInput(day))
    }

    return(
        <>
            <BasicBox>
                <FormControl>
                    <RadioGroup
                        value={reminder.RepetitionPeriod}
                    >
                        {
                            repetitionList.map((item)=>(
                                <CheckboxWrapper key={item.key} onClick={(e)=>handlePeriodClick(e,item.value)}>
                                    <FormControlLabel value={item.value} control={<Radio/>} label={item.text}/>
                                    {
                                        (item.value === 'w' && reminder.RepetitionPeriod === 'w') ?
                                            (
                                                <DayListWrapper >
                                                    {item.dayList.map((day) => (
                                                        <DayWrapper key={day.key} check={reminder.RepetitionDay.includes(day.value)?1:0} onClick={(e)=>handleDayClick(e,day.value)}>
                                                            {day.text}
                                                        </DayWrapper>
                                                    ))}
                                                </DayListWrapper>
                                            )
                                            : null
                                    }
                                </CheckboxWrapper>
                            ))
                        }
                    </RadioGroup>
                </FormControl>
            </BasicBox>
        </>
    );
}

const CheckboxWrapper = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: column;
  width: 100%;
`

const DayListWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`

const DayWrapper = styled(Button)`
  border-radius: 999px;
  color:${props=>props.theme.color.primary};
  margin: 12px;
  min-width: 0;
  box-shadow: ${props=>props.check && `1px 2px 2px 1px rgb(55, 71, 107, 0.5)`};
`
