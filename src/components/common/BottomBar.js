import * as React from "react";
import {BottomNavigation, BottomNavigationAction, Box} from "@mui/material";
import {useState} from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import styled from "styled-components";
import {useLocation, useNavigate} from "react-router-dom";
import {pageList} from "../../resources/string";


export default function BottomBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = useState(pageList.filter(v=>v.pathname === location.pathname)[0].bottomId);
    return (
        <>
            <Box sx={{width: '100%'}}>
                <StyledBottomNav
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                        navigate(pageList[newValue].pathname);
                    }}
                >
                    <WhiteBottomNavigationAction label = {pageList[0].text} icon={<HomeOutlinedIcon/>}/>
                    <WhiteBottomNavigationAction label = {pageList[1].text} icon={<ListAltOutlinedIcon/>}/>
                    <WhiteBottomNavigationAction label = {pageList[3].text} icon={<SettingsOutlinedIcon/>}/>
                </StyledBottomNav>
            </Box>
        </>
    );
};

const StyledBottomNav = styled(BottomNavigation)`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -1px 8px -1px rgba(0, 0, 0, 0.2);
`;

const WhiteBottomNavigationAction = styled(BottomNavigationAction)`
  color: rgb(189, 189, 189);

  &.Mui-selected {
    color: ${props => props.theme.color.primary};
  }
`;
