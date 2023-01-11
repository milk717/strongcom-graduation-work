import styled from "styled-components";
import {Chip as MuiChip} from "@mui/material";

export default function HomeBox({children, boxTitle = 'Today\'s Reminder'}){
    return(
        <>
            <Chip label={boxTitle} />
            <StyledBox>
                {children}
            </StyledBox>
        </>
    );
}

const Chip = styled(MuiChip)`
  position: relative;
  z-index: 1;
  margin-left: 8px;
  box-shadow: 2px 2px 8px 2px rgb(55, 71, 107, 0.5);
  background-color: ${props=>props.theme.color.primaryLight};
  color: ${props=>props.theme.color.white};
`

const StyledBox = styled.div`
  position: relative;
  top: -18px;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 8px 2px rgb(55, 71, 107, 0.5);
  border-radius: 16px;
  padding: 8px 8px 0 8px ;
  background-color: ${props=>props.theme.color.white};
`