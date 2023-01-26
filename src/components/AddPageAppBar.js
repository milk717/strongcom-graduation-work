import {Link, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {AppBar as MuiAppBar, Box, Toolbar, Typography} from "@mui/material";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';import * as React from "react";
import styled from "styled-components";

export default function AddPageAppBar(){
    const navigate = useNavigate();
    const location = useLocation();
    const [title, setTitle] = useState(location.pathname === '/add' ? '리마인더 추가' : '반복')
    console.log(location)

    return (
        <>
            <Box sx={{width: '100%'}}>
                <DefaultAppBar>
                    <Toolbar>
                        <StyledButton to='/notice' onClick={()=>navigate(-1)}>
                            <ArrowBackIosNewOutlinedIcon/>
                        </StyledButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1}}
                        >
                            {title}
                        </Typography>
                    </Toolbar>
                </DefaultAppBar>
            </Box>
        </>

    );
}

const DefaultAppBar = styled(MuiAppBar)`
  position: fixed;
  background-color: ${props => props.theme.color.primaryLight};
  color: ${props => props.theme.color.white};
`;

const StyledButton = styled.button`
  color:  ${props => props.theme.color.white};
  background: none;
  border: none;
  outline: none;
  display: flex;
  margin-right: 4px;
`
