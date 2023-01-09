import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./Main";
import HomePage from "./page/HomePage";

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='./' element={Main}>
                <Route path = 'home' element={HomePage}/>
            </Route>
          </Routes>
        </BrowserRouter>
    );
}

export default App;
