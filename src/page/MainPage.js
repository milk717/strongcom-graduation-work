import AppBar from "../components/common/AppBar";
import BottomBar from "../components/common/BottomBar";
import {Outlet, useNavigate} from "react-router-dom";
import AddTaskIcon from "@mui/icons-material/AddTask";
import {IconButton as MuiIconButton} from "@mui/material";
import styled from "styled-components";

export default function MainPage() {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <AppBar/>
            </header>
            <main>
                <Outlet/>
                <IconButton aria-label="add" size="large" onClick={e=>navigate('/add')}>
                    <AddTaskIcon/>
                </IconButton>
            </main>
            <footer>
                <BottomBar/>
            </footer>
        </>
    );
}

const IconButton = styled(MuiIconButton)`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.white};
  position: fixed;
  right: 16px;
  bottom: 72px;
  &:hover{
    background-color: ${props => props.theme.color.primaryLight};
  }
`;
