import * as React from 'react';
import styled from 'styled-components';
import {AppBar as MuiAppBar, Box, Toolbar, Typography} from "@mui/material";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {Link} from "react-router-dom";


export default function AppBar({
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
  background-color: ${props => props.theme.color.white};
  color: ${props => props.theme.color.primary};
`;

const StyledLink = styled(Link)`
  color:  ${props => props.theme.color.primary};
  display: flex;
`


