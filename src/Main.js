import AppBar from "./components/AppBar";
import BottomBar from "./components/BottomBar";
import {Outlet} from "react-router-dom";

export default function Main(){
    return(
        <>
            <header>
                <AppBar/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <BottomBar/>
            </footer>
        </>
    );
}