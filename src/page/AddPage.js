import AddPageAppBar from "../components/AddPage/AddPageAppBar";
import {Outlet} from "react-router-dom";
import BottomTwoButton from "../components/AddPage/BottomTwoButton";

export default function AddPage(){
    return(
        <>
            <header>
                <AddPageAppBar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <BottomTwoButton/>
            </footer>
        </>
    );
}
