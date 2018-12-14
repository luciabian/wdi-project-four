import React from 'react';

function FormInput({ name, type, handleChange }) {
  return(
    <div className="field">
      <input className="input" name={name} type={type} onChange={handleChange}/>
    </div>
  );
}

export default FormInput;
