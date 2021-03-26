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

const initialOrders = [];

const initialDisabled = true;

export default function App() {
  const [orders, setOrders] = useState(initialOrders);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  useEffect(() => {
    console.log(orders);
  }, [orders]);

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/orders", newOrder)
      .then((res) => {
        console.log(res.data);
        setOrders([res.data, ...orders]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: ['sausage', 'jalapeno', 'mushroom', 'olive'].filter(
        (topping) => formValues[topping]
      ),
      instruction: formValues.instruction.trim()
    };
    postNewOrder(newOrder);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
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
