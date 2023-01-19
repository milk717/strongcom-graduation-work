import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import HomePage from "./page/HomePage";
import ListPage from "./page/ListPage";
import SettingPage from "./page/SettingPage";
import AddPage from "./page/AddPage";

function App() {
    return (
          <Routes>
            <Route path='/' element={<Main/>}>
                <Route path = '/' element={<HomePage/>}/>
                <Route path = 'home' element={<HomePage/>}/>
                <Route path = 'list' element={<ListPage/>}/>
                <Route path = 'setting' element={<SettingPage/>}/>
            </Route>
            <Route path = 'add' element={<AddPage/>}/>
          </Routes>
    );
}

export default App;
