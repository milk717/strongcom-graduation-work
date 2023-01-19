import {Avatar as MuiAvatar, Stack} from "@mui/material";
import styled from "styled-components";
import {viewWidthCalc} from "../lib/viewportCalculate";

export default function UserProfile(){
    return(
        <>
            <UserAgentWrapper>
                <Avatar alt="User-Agent"
                        src="https://blog.kakaocdn.net/dn/bAiTQP/btquRcLlEU9/soHQmOD9kzfvNT2v5WXSF1/img.jpg"/>
                <h1>괴도키드</h1>
            </UserAgentWrapper>
        </>
    );
}

const UserAgentWrapper = styled(Stack)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  & > h1{
    font-size: 24px;
    margin: 12px;
  }
`;

const Avatar = styled(MuiAvatar)`
  width: ${viewWidthCalc(100, {})};
  height: ${viewWidthCalc(100, {})};
`