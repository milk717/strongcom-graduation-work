import styled from "styled-components";
import {Avatar as MuiAvatar, Button, IconButton, ListItem, Stack} from "@mui/material";
import {viewWidthCalc} from "../lib/ViewportCalculate";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function SamePeopleCheck() {
    return (
        <>
            <StyledBox>
                <h1>같은 인물인가요?</h1>
                <Stack spacing={4}>
                    <Stack direction="row" spacing={8}>
                        <Avatar alt="Remy Sharp"
                                src="https://mblogthumb-phinf.pstatic.net/MjAxNzA5MjFfMjE4/MDAxNTA1OTI5MDg0MDU2.9DGr2hrrXsQlSZe5nFrioebPB4YKe3vGtsp-Um-dL6Ag.djjGyV5AffGoHTyuA69Hg7Fa25QbTRoU8MHlrBnvsb0g.JPEG.ooo---ooo/%EA%B0%80%EB%9D%BC_%EB%A7%88%EC%B7%A8%EC%B4%9D.jpg?type=w800"/>
                        <Avatar alt="Travis Howard"
                                src="https://w.namu.la/s/161ddf59692ae23ae6c4e3415eeeb83ae68bdceb26dc5b4121545b9b81b18133575adf7e2a65bdc88417f72d39c107329b0ed54606612a736823e7cd2944265c008d1bc446f3a55763d9da32ccba4c5fd587ad7c38905ff79abf24682562e801"/>
                    </Stack>
                    <ButtonWrapper direction="row" spacing={2}>
                        <Button variant="contained" endIcon={<CheckIcon/>}>
                            예
                        </Button>
                        <Button variant="contained" endIcon={<ClearIcon/>}>
                            아니오
                        </Button>
                    </ButtonWrapper>
                </Stack>
            </StyledBox>
        </>
    )
}
const StyledBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
  padding: 16px;
  box-shadow: 2px 2px 8px 2px rgb(55, 71, 107, 0.5);
  border-radius: 16px;
  background-color: ${props => props.theme.color.white};
  & > h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
`;

const Avatar = styled(MuiAvatar)`
  width: ${viewWidthCalc(80, {})};
  height: ${viewWidthCalc(80, {})};
`

const ButtonWrapper = styled(Stack)`
  width: 100%;
  & > Button {
    width: 100%;
    background-color:${props=>props.theme.color.secondary}
  }
`