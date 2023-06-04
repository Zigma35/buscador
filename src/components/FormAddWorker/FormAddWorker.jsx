import { Input } from '../Input';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./FormAddWorker.css";
function FormAddWorker({onClickAddWorker}) {
  const [nombre, setNombre] = useState();
  const [correo, setCorreo] = useState();

  const handlerOnClick = () => {
      onClickAddWorker({
        nombre:nombre,
        correo:correo,
      });
  };

  return (
    <div className='form'>
      <br />

      <Input 
      type="text" 
      placeholder="Nombre del Colaborador" 
      className="form__input"
      onChangeInput={(e) => setNombre(e.target.value)}
      
      />

      <Input 
      type="text" 
      placeholder="Correo del Colaborador" 
      className="form__input"
      onChangeInput={(e) => setCorreo(e.target.value)}
      
      />

      <br />
      <Button variant="outline-dark" onClick={handlerOnClick}>
        Agregar Colaborador
        </Button>
    </div>
  );
}

export default FormAddWorker;