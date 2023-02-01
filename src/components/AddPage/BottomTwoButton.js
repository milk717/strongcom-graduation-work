import {Button as MuiButton} from "@mui/material";
import styled from "styled-components";

export default function BottomTwoButton({secondBtnName, onSubmit, onCancel}){

    return(
        <ButtonWrapper>
            <Button onClick={onCancel}>취소</Button>
            <Button onClick={onSubmit}>{secondBtnName}</Button>
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${props => props.theme.color.primaryLight};
  width: 100%;
`

const Button = styled(MuiButton)`
  color: ${props => props.theme.color.white}
`
