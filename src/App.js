import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Form from './Form';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import schema from './formSchema';
import { Route, Switch } from 'react-router-dom';

const initialFormValues = {
  name: '',
  size: '',
  sausage: false,
  jalapeno: false,
  mushroom: false,
  olive: false,
  instruction: ''
};

const initialFormErrors = {
  name: '',
  size: ''
};

const initialDisabled = true;

export default function App() {
  const [orders, setOrders] = useState(null);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = (newOrder) => {

  };

  const inputChange = (name, values) => {

  };

  const formSubmit = () => {

  };

  useEffect(() => {

  }, [formValues]);

  return (
    <div className='app container'>
      <Navigation />

      <Switch>
        <Route path={"/pizza"}>
          <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path={"/"}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
