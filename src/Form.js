import React from 'react';

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {

  };

  const onChange = (evt) => {

  };

  return (
    <div className='form container'>
      <h3>How would you like your tasty pizza?</h3>
      <h4>Order Details:</h4>

      <div className='form-group inputs'>

        <label>
          Customer Name:&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>
          <br/>Pizza Size:&nbsp;
          <select onChange={onChange} value={values.size} name='size'>
            <option value="">----- Select a Size -----</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Select your Toppings:</h4>

        <label>
          Sausages:
          <input
            type="checkbox"
            name="sausage"
            checked={values.sausage}
            onChange={onChange}
          />
        </label>

        <label>
          &nbsp;&nbsp;Jalapeños:
          <input
            type="checkbox"
            name="jalapeno"
            checked={values.jalapeno}
            onChange={onChange}
          />
        </label>

        <label>
          &nbsp;&nbsp;Mushrooms:
          <input
            type="checkbox"
            name="mushroom"
            checked={values.mushroom}
            onChange={onChange}
          />
        </label>

        <label>
          &nbsp;&nbsp;Olives:
          <input
            type="checkbox"
            name="olive"
            checked={values.olive}
            onChange={onChange}
          />
        </label>
      </div>

      <div className='form-group special'>

        <label>
            Special Instructions:&nbsp;
            <input
              value={values.instruction}
              onChange={onChange}
              name='instruction'
              type='text'
            />
          </label>
      </div>

      <button id='submitButton' disabled={disabled}>Submit Order</button>

      <div className='errors'>
        <div id="nameErrors">{errors.name}</div>
        <div id="sizeErrors">{errors.size}</div>
      </div>
    </div>
  );
};
