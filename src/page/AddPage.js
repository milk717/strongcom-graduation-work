import AddPageAppBar from "../components/AddPage/AddPageAppBar";
import {Outlet} from "react-router-dom";

export default function AddPage(){
    return(
        <>
            <header>
                <AddPageAppBar/>
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    );
}