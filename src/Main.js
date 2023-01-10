import BasicAppBar from "./components/BasicAppBar";
import BottomBar from "./components/BottomBar";

export default function Main(){
    return(
        <>
            <header>
                <BasicAppBar/>
            </header>
            <footer>
                <BottomBar/>
            </footer>
        </>
    );
}