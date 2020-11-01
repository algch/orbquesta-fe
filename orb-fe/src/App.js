import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import RythmicDictation from './scenes/RythmicDictation';
import Login from './scenes/Login';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" >
          <Login />
        </Route>
        <Route exact path="/exercises" >
          <RythmicDictation />
        </Route>
    </BrowserRouter>
  );
}

export default App;
