import {Stack} from "@mui/material";
import styled from "styled-components";
import RepetitionCheckboxList from "../components/AddPage/RepetitionCheckboxList";
import BottomTwoButton from "../components/AddPage/BottomTwoButton";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {RepetitionCancel} from "../modules/reminderSlice";

export default function RepetitionContainer(){
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const handleCancel = () =>{
        dispatch(RepetitionCancel())
        navigate('/add');
    }
    return(
        <>
            <Stack>
                <TextWrapper>
                    <p>9월 28일부터 1주마다 목, 금</p>
                    <p>오후 6시 이전에 반복되는 일정입니다.</p>
                </TextWrapper>
                <RepetitionCheckboxList/>
            </Stack>
            <footer>
                <BottomTwoButton
                    secondBtnName={'적용'}
                    onSubmit={()=>navigate('/add')}
                    onCancel={handleCancel}
                />
            </footer>
        </>
    )
}

const TextWrapper = styled.div`
    margin-top: 24px;
`


