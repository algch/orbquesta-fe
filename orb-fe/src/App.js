import React from 'react';
import './App.scss';
import { Route, BrowserRouter } from 'react-router-dom';

import RythmicDictation from './scenes/rythmic-dictation/RythmicDictation';
import Login from './scenes/Login';
import About from './scenes/About';
import SignUp from './scenes/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" >
        <Login />
      </Route>
      <Route exact path="/exercises" >
        <RythmicDictation />
      </Route>
      <Route exact path="/about" >
        <About />
      </Route>
      <Route exact path="/signup" >
        <SignUp />
      </Route>
    </BrowserRouter>
  );
}

export default App;
