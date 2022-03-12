import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {About, Home, Projects } from './pages';
import { Header, Footer } from './layout';

import './App.css';

function App(){

  return(
    <>
      <Header />
      <Switch>
        {/* <Route path="/about"><About /></Route> */}
        <Route exact path="/"><About /></Route>
        <Route path="/projects"><Projects /></Route>
      </Switch>
      <Footer />
    </>
  );

};

export default App;
