import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Navigation(props) {
  const history = useHistory();

  const routeToHome = () => {
    history.push("/");
  }

  return (
    <div className='navigation container'>
      <h1>LAMBDA EATS</h1>
      <button onClick={routeToHome} className="home-button">Home</button>
    </div>
  );
};
