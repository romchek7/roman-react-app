import React, {lazy, Suspense} from "react"
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {appInitializeThunk} from "./redux/app-initialization-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {getInitializationApp} from "./selectors/initializationSelectors";
import Profile from "./components/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
const Dialogs = lazy(() => import('./components/Dialogs/Dialogs'))
const Users = lazy(() => import('./components/Users/Users'))

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
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/home' element={<Home/>}/>
                            <Route path='/profile' element={<Profile/>}>
                                <Route exact path=':userId' element={<Profile/>}/>
                            </Route>
                            <Route path='/dialogs' element={<Suspense fallback={<Preloader/>}><Dialogs/></Suspense>}>
                                <Route path=':id' element={<Suspense fallback={<Preloader/>}><Dialogs/></Suspense>}/>
                            </Route>
                            <Route path='/users' element={<Suspense fallback={<Preloader/>}><Users/></Suspense>}/>
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
