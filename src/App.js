import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/home' element={<Home/>}/>
                        <Route path='/dialogs' element={<DialogsContainer store={props.store}/>}>
                            <Route path=':id' element={<Dialogs/>}/>
                        </Route>
                        <Route path='/profile' element={<Profile store={props.store}/>}/>
                        <Route path='/news' element={<News/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
