import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import '../src/Style/App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <Header />
        <Navbar />
        <div className="app__wrapper-content">

          <Route path='/profile' render={() =>
            <Profile posts={props.state.profilePage} />} />

          <Route path='/dialogs' render={() =>
            <Dialogs messagesPage={props.state.messagesPage} />} />

          <Route path='/news' render={() =>
            <News />} />

          <Route path='/music' render={() =>
            <Music />} />


          <Route path='/settings' render={() =>
            <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
