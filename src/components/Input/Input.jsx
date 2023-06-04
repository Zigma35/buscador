import React from 'react';
import Form from 'react-bootstrap/Form';

export const Input = ({onChangeInput, placeholder, className}) => {
  return (
    <Form.Control 
      type="text" 
      className={className}
      placeHolder={placeholder}
      onChange={(e) => onChangeInput(e)} 
  />
  );
};
