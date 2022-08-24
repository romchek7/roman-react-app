import React from "react"
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {appInitializeThunk} from "./redux/app-initialization-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {getInitializationApp} from "./selectors/initializationSelectors";

class App extends React.Component {
    componentDidMount() {
        this.props.appInitializeThunk()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <NavbarContainer/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/home' element={<Home/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}>
                                <Route path=':id' element={<Dialogs/>}/>
                            </Route>
                            <Route path='/profile' element={<ProfileContainer/>}>
                                <Route exact path=':userId' element={<ProfileContainer/>}/>
                            </Route>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => {
    return ({
        initialized: getInitializationApp(state)
    })
}

export default compose(
    connect(mapStateToProps, {appInitializeThunk}),
)(App)
