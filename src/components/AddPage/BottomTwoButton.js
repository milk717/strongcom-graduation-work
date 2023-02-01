import {Button as MuiButton} from "@mui/material";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import styled from "styled-components";

export default function BottomTwoButton(){
    const location = useLocation();
    const [secondBtnName, setSecondBtnName] = useState(location.pathname==='/add' ? '저장':'적용' );

    useEffect(() =>{
        setSecondBtnName((state)=>location.pathname==='/add' ? '저장':'적용' )
    },[location])

    return(
        <ButtonWrapper>
            <Button>취소</Button>
            <Button>{secondBtnName}</Button>
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${props => props.theme.color.primaryLight};
`

const Button = styled(MuiButton)`
  color: ${props => props.theme.color.white}
`
