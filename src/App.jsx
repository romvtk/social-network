import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import '../src/Style/App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderComponent from './components/Header/HeaderContainer';


const App = (props) => {
  console.log(props);
  
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <HeaderComponent />
        <Navbar />
        <div className="app__wrapper-content">
          <Route path='/profile/:userID?'
            render={() =>
              <ProfileContainer
                store={props.store}
              />}/>
          <Route path='/dialogs'
            render={() =>
              <DialogsContainer
                store={props.store}    />
            }/>

          <Route path='/news'
            render={() =>
              <News />} />

          <Route path='/music'
            render={() =>
              <Music />} />

          <Route path='/users'
            render={() => <UsersContainer />} />

          <Route path='/settings'
            render={() =>
              <Settings />} />


        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
