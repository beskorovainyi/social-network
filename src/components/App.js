import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';
import Music from './Music/Music';
import Settings from './Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";
import store from "./redux/store";

const App = (props) => {
    return (
    	<BrowserRouter>
        	<div className='app-wrapper'>
        		<Header />
        		<Navbar />
        		<div className='app-wrapper-content'>	
        			<Route path='/profile' render={ () => <Profile
						profilePage={props.state.profilePage}
						dispatch={props.dispatch}
					/> } />
        			<Route path='/dialogs' render={ () => <Dialogs store={props.store} /> } />
        			<Route path='/music' render={ () => <Music /> } />
        			<Route path='/news' render={ () => <News /> } />
        			<Route path ='/settings' render={ () => <Settings /> } />
        		</div>
        	</div>
        </BrowserRouter>
    );
}

export default App;