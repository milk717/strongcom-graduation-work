import * as React from 'react';
import styled from 'styled-components';
import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Link} from "react-router-dom";
import {viewWidthCalc} from "../lib/ViewportCalculate";


export default function BasicAppBar({
                                        appBarTitle = 'Home',
                                    }) {
    return (
        <>
            <Box sx={{width: '100%'}}>
                <DefaultAppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{flexGrow: 1}}
                        >
                            {appBarTitle}
                        </Typography>
                        <WhiteLink to='/notice'>
                            <NotificationsNoneIcon/>
                        </WhiteLink>
                    </Toolbar>
                </DefaultAppBar>
            </Box>
        </>

    );
}

const DefaultAppBar = styled(AppBar)`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
`;

const WhiteLink = styled(Link)`
  color:  ${props => props.theme.color.white};
  display: flex;
`


