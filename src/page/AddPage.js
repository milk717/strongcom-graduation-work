import AddPageAppBar from "../components/AddPageAppBar";
import {Outlet, useLocation} from "react-router-dom";
import AddTaskIcon from '@mui/icons-material/AddTask';

export default function AddPage(){
    return(
        <>
            <AddPageAppBar/>
            <Outlet/>
        </>
    );
}