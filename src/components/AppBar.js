import * as React from 'react';
import styled from 'styled-components';
import {AppBar as MuiAppBar, Box, Toolbar, Typography} from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {pageList} from "../resources/string";


export default function AppBar({
                                        appBarTitle ,
                                    }) {
    const location = useLocation();
    const [title, setTitle] = useState(appBarTitle || pageList.filter(v=>v.pathname === location.pathname)[0]?.text);
    useEffect(()=>{
        setTitle(pageList.filter(v=>v.pathname === location.pathname)[0]?.text);
    },[location])

    return (
        <>
            <Box sx={{width: '100%'}}>
                <DefaultAppBar>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1}}
                        >
                            {title}
                        </Typography>
                        <StyledLink to='/notice'>
                            <NotificationsNoneIcon/>
                        </StyledLink>
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

const StyledLink = styled(Link)`
  color:  ${props => props.theme.color.white};
  display: flex;
`


