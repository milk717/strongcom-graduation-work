import {Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage";
import HomeContainer from "./containers/HomeContainer";
import ListContainer from "./containers/ListContainer";
import SettingContainer from "./containers/SettingContainer";
import AddPage from "./page/AddPage";
import ReminderInfoInputContainer from "./containers/ReminderInfoInputContainer";
import RepetitionContainer from "./containers/RepetitionContainer";

function App() {
    return (
          <Routes>
            <Route path='/' element={<MainPage/>}>
                <Route path = '/' element={<HomeContainer/>}/>
                <Route path = 'home' element={<HomeContainer/>}/>
                <Route path = 'list' element={<ListContainer/>}/>
                <Route path = 'setting' element={<SettingContainer/>}/>
            </Route>
            <Route path = 'add' element={<AddPage/>}>
                <Route path = '' element={<ReminderInfoInputContainer/>}/>
                <Route path = 'repetition' element={<RepetitionContainer/>}/>
            </Route>
          </Routes>
    );
}

export default App;
