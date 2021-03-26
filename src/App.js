import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Form from './Form';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';
import { Route, Switch } from 'react-router-dom';

export default function App() {


  return (
    <div className='app container'>
      <Navigation />

      <Switch>
        <Route path={"/pizza"}>
          <Form />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
