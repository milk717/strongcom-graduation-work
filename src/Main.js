import AppBar from "./components/AppBar";
import BottomBar from "./components/BottomBar";

export default function Main(){
    return(
        <>
            <header>
                <AppBar/>
            </header>
            <footer>
                <BottomBar/>
            </footer>
        </>
    );
}