import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import HomePage from "./page/HomePage";

function App() {
    return (
          <Routes>
            <Route path='/' element={<Main/>}>
                <Route path = 'home' element={<HomePage/>}/>
            </Route>
          </Routes>
    );
}

export default App;
