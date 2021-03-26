import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {

  return (
    <div className='home container'>
      <h2>Your favorite food deliviered while coding!</h2>

      <Link to="/pizza">Order Pizza</Link>
    </div>
  );
};
