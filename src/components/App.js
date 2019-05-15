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



const App = (props) => {


    return (
    	
    	<BrowserRouter>
        	<div className='app-wrapper'>
        		<Header />
        		<Navbar />
        		<div className='app-wrapper-content'>	
        			<Route path='/profile' render={ () => <Profile postData={props.postData}/> } />
        			<Route path='/dialogs' render={ () => <Dialogs messageData={props.messageData} dialogsData={props.dialogsData} /> } />
        			<Route path='/music' render={ () => <Music /> } />
        			<Route path='/news' render={ () => <News /> } />
        			<Route path ='/settings' render={ () => <Settings /> } />
        		</div>
        	</div>
        </BrowserRouter>

    );
}

export default App;